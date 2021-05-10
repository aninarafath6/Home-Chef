const Dish = require("../models/Dish");
const ErrorResponse = require("../utils/errorResponse");


// to get all dishes from db
exports.getAllDish = async (req, res, next) => {
  res.send("this is add dish router");
};

// to create a dish 
exports.createNewDish= async (req, res, next) => {
  const { name, price, availability } = req.body;

  try {
    const dish = await Dish.create({
      name,
      price,
      availability,
    });

    try {
      const image = req.files.image;
      image.mv(`../public/dishImages/${dish._id}.png`, (err, done) => {
        if (err) {
          next(new ErrorResponse("image uploading failed", 500));
        }
        res.status(201).json({ success: true });
      });
    } catch (error) {
      next(new ErrorResponse("creating new dish  failed", 500));
    }
  } catch (error) {
    next(new ErrorResponse("creating new dish  failed", 500));
  }
};

// to update a dish 
exports.updateDish = async (req, res, next) => {
  res.send("this is update dish router ");
};

// to delate a dish
exports.delateDish = async (req, res, next) => {
  res.send("this is delate dish router");
};
