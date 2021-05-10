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
    sentJwtToken(user, 201, res);
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

    sentJwtToken(user, 200, res);
  } catch (error) {
    return next(new ErrorResponse(error, 500));
  }
};

// exports.forgotPassword = async (req, res, next) => {
//   const { email } = req.body;
//   const user = await User.findOne({ email });

//   if (!user) {
//     return next(new ErrorResponse("email could not be sent", 404));
//   }

//   const restToken = user.genResetPasswordToken();
//   await user.save();

//   const resetURL = `http://localhost:3000/passwordReset/${restToken}`;
//   const message = `
//   <h1>You have requested a password reset</h1>
//   <p>please click and this link to reset your old password</p>
//   <a href='${resetURL}' clicktracking=off>${resetURL}</a>
//   `;

//   try {
    
//   } catch (error) {
    
//   }
// };

// exports.restPassword = (req, res, next) => {
//   res.send("this is restPassword");
// };

const sentJwtToken = async (user, statusCode, res) => {
  const token = await user.genSignedToken();

  res.status(statusCode).json({ success: true, token });
};
