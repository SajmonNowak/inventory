const express = require("express");
const router = express.Router();
const Food = require("../models/food");
const { formatDate, formatBack } = require("../helper/formatDate");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: '../public/uploads',
  filename: function (req,file,cb){
    cb(null, file.fieldname+ "-"+Date.now()+path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage
})

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

router.post("/", upload.single("itemImage"), (req, res) => {
  const timeOfCreation = formatDate(new Date());
  console.log(req.file);
  const food = new Food({
    created: timeOfCreation,
    name: req.body.itemName,
    type: req.body.itemType,
    amount: req.body.itemAmount,
    category: req.body.itemCategory,
    price: req.body.itemPrice,
    id: req.body.itemName + formatBack(timeOfCreation),
  });

  // upload(req, res , (err) => {
  //   if (err){
  //     console.log(err)
  //   } else {
  //     console.log(req.file)
  //   }
  // })

  food
    .save()
    .then((answer) => res.status(201).send("Successfully created Item"))
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
    name: req.body.itemName,
    price: req.body.itemPrice,
    amount: req.body.itemAmount,
    category: req.body.itemCategory,
    type: req.body.itemType,
  };

  Food.findByIdAndUpdate(req.body._id, changes)
    .then((answer) => res.status(201).send("Sucess"))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
