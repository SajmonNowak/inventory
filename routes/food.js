const express = require("express");
const router = express.Router();
const Food = require("../models/food");

router.get("/", (req, res) => {
  Food.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  Food.findById(req.params.id).then((result) => {
    res.json(result);
  });
});

router.post("/", (req, res) => {
  console.log("hallo , das ist die query : ", req.body);
  const food = new Food({
    name: req.body.itemName,
    type: req.body.itemType,
    amount: req.body.itemAmount,
    category: req.body.itemCategory,
    price: req.body.itemPrice,
  });

  food.save();
});

module.exports = router;
