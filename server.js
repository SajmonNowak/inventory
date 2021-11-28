const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

const dbURI =
  "mongodb+srv://sajmon:inventory121@inventory.wgmyw.mongodb.net/inventoryDB?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log(err));

app.use("/food", require("./routes/food"));
app.use("/clothes", require("./routes/clothes"));
app.use("/upload", require("./routes/upload"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
