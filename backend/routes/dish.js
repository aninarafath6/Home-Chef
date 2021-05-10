const express = require("express");
const router = express.Router();

const {
  getAllDish,
  createNewDish,
  updateDish,
  delateDish,
} = require("../controllers/dish-controllers");

router.route("/").get(getAllDish).post(createNewDish);
router.route("/:id").put(updateDish).delete(delateDish);

module.exports = router;
