const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nonFoodSchema = new Schema({
    id: String,
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: false,
    },
    price: Number,
    created: String,
    shelf_life: Number
})

const NonFood = mongoose.model('nonfood', nonFoodSchema);

module.exports = NonFood;