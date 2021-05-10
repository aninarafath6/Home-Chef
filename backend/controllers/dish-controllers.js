const Dish = require("../models/Dish");
const ErrorResponse = require("../utils/errorResponse");

// to get all dishes from db
exports.getAllDish = async (req, res, next) => {
  res.send("this is add dish router");
};

// to create a dish
exports.createNewDish = async (req, res, next) => {

  // destructor value from request body
  const { name, price, availability } = req.body;

  try {
    // creating a new dish
    const dish = await Dish.create({
      name,
      price,
      availability,
    });

    try {
      // image taking from request body
      const image = req.files.image;

      // checking have an image?
      if (!image) {
        next(new ErrorResponse("image not found please upload image", 404));
      }

      // moving image into public/dish-images/id.png
      image.mv(`../public/dish-images/${dish._id}.png`, (err, done) => {
        // error handling
        if (err) {
          next(new ErrorResponse("image uploading failed", 500));
        }

        // success response sending
        res.status(201).json({ success: true });
      });
    } catch (error) {
      //error handling
      next(new ErrorResponse("creating new dish  failed", 500));
    }
  } catch (error) {
    //error handling
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
