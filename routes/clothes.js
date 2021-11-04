const express = require("express");
const router = express.Router();
const Clothes = require("../models/clothes");
const { formatDate, formatBack } = require("../helper/formatDate");

router.get("/", (req, res) => {
  Clothes.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  Clothes.findById(req.params.id).then((result) => {
    res.json(result);
  });
});

router.post("/", (req, res) => {
  const timeOfCreation = formatDate(new Date());
  const clothes = new Clothes({
    created: timeOfCreation,
    name: req.body.Name,
    amount: req.body.Amount,
    category: req.body.Category,
    price: req.body.Price,
    color: req.body.Color,
    size: req.body.Size,
  });

  clothes
    .save()
    .then((result) => res.status(201).send(result._id))
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.delete("/", (req, res) => {
  Clothes.deleteOne({ _id: req.body._id })
    .then((answer) => res.status(201).send("Sucess"))
    .catch((err) => res.status(400).send(err));
});

router.put("/", (req, res) => {
  const changes = {
    name: req.body.Name,
    price: req.body.Price,
    amount: req.body.Amount,
    category: req.body.Category,
    size: req.body.Size,
    color: req.body.Color,
  };

  Clothes.findByIdAndUpdate(req.body._id, changes)
    .then((answer) => res.status(201).send("Sucess"))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
