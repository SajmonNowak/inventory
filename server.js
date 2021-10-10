const express = require("express");
const mongoose = require("mongoose");
const Food = require("./models/food");

const app = express();

const port = process.env.PORT || 5000;

const dbURI =
  "mongodb+srv://sajmon:inventory121@inventory.wgmyw.mongodb.net/inventoryDB?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch((err) => console.log(err));

app.get("/add-food", (req, res) => {
  const food = new Food({
    name: "Strawberry",
    type: "Fruit",
    amount: 4,
    price: 2,
    shelf_life: 5,
  });

  food.save()
});

app.get("/customers/api", (req, res) => {
  const customers = [{ name: "henrike" }, { name: "tom" }, { name: "john" }];

  res.json(customers);
});
