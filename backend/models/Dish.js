const mongoose = require("mongoose");

const DishSchema = new mongoose.Schema({
    name:{
    type: String,
    required:[true,"please provide dish name"]
    },
    price:{
        type:Number,
        required: [true,"please provide dish price"]
    },
    availability:{
        type: Number,
        required: [true,"please provide dish availability"]
    }
});

const Dish = mongoose.model("Dishes",DishSchema);

module.exports = Dish;