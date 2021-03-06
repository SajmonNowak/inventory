const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clothesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String || Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  created: String,
  imgPath: String,
});

const Clothes = mongoose.model("clothes", clothesSchema);

module.exports = Clothes;
