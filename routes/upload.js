const express = require("express");
const router = express.Router();
const multer = require("multer");
const Food = require("../models/food");
const Clothes = require("../models/clothes");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "client/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

router.post("/food", upload.single("itemImage"), (req, res) => {
  console.log("adding image backened")
  Food.updateOne(
    { _id: req.body._id },
    { $set: { imgPath: req.file.path } },
    { multi: true }
  ).then((answer) => console.log(answer)).catch((error) => console.log(error));
});

router.post("/clothes", upload.single("itemImage"), (req, res) => {
  Clothes.updateOne(
    { _id: req.body._id },
    { $set: { imgPath: req.file.path } },
    { multi: true }
  ).then((answer) => console.log(answer));
});

module.exports = router;
