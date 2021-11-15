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
    console.log(result);
    res.json(result);
  }).catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  const timeOfCreation = formatDate(new Date());

  const food = new Food({
    created: timeOfCreation,
    name: req.body.Name,
    amount: req.body.Amount,
    category: req.body.Category,
    price: req.body.Price,
  });

  food
    .save()
    .then((result) => res.status(201).send(result._id))
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.delete("/", (req, res) => {
  Food.deleteOne({ _id: req.body._id })
    .then((answer) => res.status(201).send("Sucess"))
    .catch((err) => res.status(400).send(err));
});

router.put("/", (req, res) => {
  const changes = {
    name: req.body.Name,
    price: req.body.Price,
    amount: req.body.Amount,
    category: req.body.Category,
  };
  console.log(req.body._id);

  Food.findByIdAndUpdate(req.body._id, changes)
    .then((answer) => res.status(201).send("Sucess"))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
