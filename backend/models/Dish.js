const mongoose = require("mongoose");

const DishSchema = new mongoose.Schema({
    name:{
    type: String,
    required:true
    },
    price:{
        type:Number,
        required: true
    },
    availability:{
        type: Number,
        required: true
    }
});

const Dish = mongoose.model("Dishes",DishSchema);

module.exports = Dish;