const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema ({
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
    price: Number,
    shelf_life: Number
});

const Food = mongoose.model('food', foodSchema);

module.exports = Food;