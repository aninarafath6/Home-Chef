const User = require("../models/Users");
const ErrorResponse = require("../utils/errorResponse");
exports.signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    sentJwtToken(user, 201,res);
  } catch (error) {
    next(error);
  }
};

exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorResponse("please provide email and password", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorResponse("invalid credentials", 404));
    }

    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      return next(new ErrorResponse("invalid credentials", 404));
    }

    sentJwtToken(user, 200,res);
  } catch (error) {
    return next(new ErrorResponse(error, 500));
  }
};

exports.forgotPassword = (req, res, next) => {
  res.send("this is forgotPassword");
};

exports.restPassword = (req, res, next) => {
  res.send("this is restPassword");
};

const sentJwtToken = async (user, statusCode, res) => {
  const token = await user.genSignedToken();

  res.status(statusCode).json({ success: true, token });
};
