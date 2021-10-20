const express = require("express");
const router = express.Router();
const multer = require("multer");
const Food = require("../models/food");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./client/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

router.post("/", upload.single("itemImage"), (req, res) => {
  Food.updateOne(
    { name: req.body.itemName },
    { $set: { imgPath: req.file.path } },
    { multi: true }
  ).then((answer) => console.log(answer))
});

module.exports = router;
