const express = require("express");
const router = express.Router();
const Food = require("../models/food");
const { formatDate, formatBack } = require("../helper/formatDate");

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
  const timeOfCreation = formatDate(new Date());
  const food = new Food({
    created: timeOfCreation,
    name: req.body.itemName,
    type: req.body.itemType,
    amount: req.body.itemAmount,
    category: req.body.itemCategory,
    price: req.body.itemPrice,
    id: req.body.itemName + formatBack(timeOfCreation),
  });

  food
    .save()
    .then((answer) => res.status(201).send("Successfully created Item"))
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.delete("/", (req, res) => {
  Food.deleteOne({ _id: req.body._id }).then((answer) => res.status(201).send("Sucess")).catch(err => res.status(400).send(err));
});

router.put("/", (req, res) => {
  console.log(req.body)

  const changes = {
    name: req.body.itemName,
    price: req.body.itemPrice,
    amount: req.body.itemAmount,
  }
 
  Food.findByIdAndUpdate(req.body._id, changes).then((answer) => res.status(201).send("Sucess")).catch(err => res.status(400).send(err))
})

module.exports = router;
