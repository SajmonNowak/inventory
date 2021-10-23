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
      name: req.body.itemName,
      amount: req.body.itemAmount,
      category: req.body.itemCategory,
      price: req.body.itemPrice,
      id: req.body.itemName + formatBack(timeOfCreation),
    });
  
    clothes
      .save()
      .then((answer) => res.status(201).send("Successfully created Item"))
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
      name: req.body.itemName,
      price: req.body.itemPrice,
      amount: req.body.itemAmount,
      category: req.body.itemCategory,
      type: req.body.itemType,
    };
  
    Clothes.findByIdAndUpdate(req.body._id, changes)
      .then((answer) => res.status(201).send("Sucess"))
      .catch((err) => res.status(400).send(err));
  });
  
  module.exports = router;
  