const express = require("express");
const router = express.Router();
const Food = require("../models/food");

router.get("", (req, res) => {
    Food.find()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log(err));
  });

module.exports = router;