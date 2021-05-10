const express = require("express");
const router = express.Router();

// auth helpers
const {
  signUp,
  signIn,
} = require("../controllers/aut-controller");

// auth routers
router.post("/signUp", signUp);
router.post("/signIn", signIn);

module.exports = router;
