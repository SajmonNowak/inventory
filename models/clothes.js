const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clothesSchema = new Schema({
    id: String,
    name: {
        type: String,
        required: true
    },
    size : {
        type: String || Number,
        required: true
    },
    color: {
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
})

const Clothes = mongoose.model('clothes', clothesSchema);

module.exports = Clothes;