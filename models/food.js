const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema ({
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
});

const Food = mongoose.model('food', foodSchema);

module.exports = Food;