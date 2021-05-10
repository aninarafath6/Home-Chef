const User = require("../models/Users");
const ErrorResponse = require("../utils/errorResponse");

// user sign up
exports.signUp = async (req, res, next) => {

  // destructor value from request body
  const { username, email, password } = req.body;
  try {

    // create a new user
    const user = await User.create({
      username,
      email,
      password,
    });

    // sending signed jwt token
    sentJwtToken(user, 201, res);
  } catch (error) {

    // error handling
    next(error);
  }
};


// user login
exports.signIn = async (req, res, next) => {

  // destructor value from request body
  const { email, password } = req.body;

  // checking have email and password ?
  if (!email || !password) {

    // error handling
    return next(new ErrorResponse("please provide email and password", 400));
  }

  try {
    // checking have a user in db
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      // error handling
      return next(new ErrorResponse("invalid credentials", 404));
    }

    // checking this password match to bd password
    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {

      // error handling
      return next(new ErrorResponse("invalid credentials", 404));
    }

    // sending signed jwt token
    sentJwtToken(user, 200, res);
  } catch (error) {
    // error handling
    return next(new ErrorResponse(error, 500));
  }
};


// sending jwt signed token function
const sentJwtToken = async (user, statusCode, res) => {
  const token = await user.genSignedToken();

  res.status(statusCode).json({ success: true, token });
};
