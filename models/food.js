const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  id: String,
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    min: [0, "Amount must be 0 or higher"],
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    min: [0, "Price must be 0 or higher"],
  },
  created: String,
  imgPath: String,
});

const Food = mongoose.model("food", foodSchema);

module.exports = Food;
