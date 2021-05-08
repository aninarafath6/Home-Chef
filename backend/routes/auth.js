const express = require("express");
const router = express.Router();

// auth helpers
const {
  signUp,
  signIn,
  forgotPassword,
  restPassword,
} = require("../helpers/autHelpers");

// auth routers
router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword/:resetToken", restPassword);

module.exports = router;
