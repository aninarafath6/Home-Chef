const User = require("../models/Users");

exports.signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.signIn = (req, res, next) => {
  res.send("this is sign in");
};

exports.forgotPassword = (req, res, next) => {
  res.send("this is forgotPassword");
};

exports.restPassword = (req, res, next) => {
  res.send("this is restPassword");
};
