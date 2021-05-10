const Dish = require("../models/Dish");
const ErrorResponse = require("../utils/errorResponse");

// to get all dishes from db
exports.getAllDish = async (req, res, next) => {
  try {
    const all_dish = await Dish.find({});
  // success response sending
    res.status(201).json({ success: true, dishes: all_dish });
  } catch (error) {
    //error handling
    next(new ErrorResponse(error, 500));
  }
};

// to create a dish
exports.createNewDish = async (req, res, next) => {
  // destructor value from request body
  const { name, price, availability } = req.body;

  // image taking from request body
  const files = req.files;
  // checking have an image?
  if (!req.files || !files.image) {
    return next(
      new ErrorResponse(
        "image not found please upload image and failed creating dish ",
        404
      )
    );
  }

  try {
    // creating a new dish
    const dish = await Dish.create({
      name,
      price,
      availability,
    });

    try {
      // moving image into public/dish-images/id.png
      files.image.mv(`./public/dish-images/${dish._id}.png`, (err, done) => {
        // error handling
        if (err) {
          return next(new ErrorResponse(err, 500));
        }

        // success response sending
        res.status(201).json({ success: true });
      });
    } catch (error) {
      //error handling
      next(new ErrorResponse(error, 500));
    }
  } catch (error) {
    //error handling
    next(new ErrorResponse(error, 500));
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
