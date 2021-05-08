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

exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      success: false,
      error: "please provide email and password",
    });
  }

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      res.status(404).json({
        success: false,
        error: "invalid credentials",
      });
    }

    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      res.status(404).json({
        success: false,
        error: "invalid credentials",
      });
    }

    res.status(201).json({
      success: true,
      token: "ercw344fdsf",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.forgotPassword = (req, res, next) => {
  res.send("this is forgotPassword");
};

exports.restPassword = (req, res, next) => {
  res.send("this is restPassword");
};
