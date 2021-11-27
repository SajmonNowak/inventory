const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Food = require("../models/food");
const Clothes = require("../models/clothes");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "client/build/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      return cb(new Error("Invalid file type"));
    }
  },
});

const uploadSingleImage = upload.single("itemImage");

router.post("/food", async (req, res) => {
  uploadSingleImage(req, res, function (err) {
    if (err) {
      return res.status(422).send(err.message);
    }
    
    Food.updateOne(
      { _id: req.body._id },
      { $set: { imgPath: req.file.path } },
      { multi: true }
    )
      .then((answer) => res.status(201).send(answer))
      .catch((error) => res.status(409).send(error));
  });
});

router.post("/clothes", (req, res) => {

  uploadSingleImage(req, res, function (err) {
    if (err) {
      return res.status(422).send(err.message);
    }
    
    Clothes.updateOne(
      { _id: req.body._id },
      { $set: { imgPath: req.file.path } },
      { multi: true }
    ).then((answer) => res.status(201).send(answer))
    .catch((error) => res.status(409).send(error));

  })
});

module.exports = router;
