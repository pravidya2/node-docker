const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb://pravidya2:prabat@192.168.112.2:27017/?authSource=admin"
);
app.get("/", (req, res) => {
  res.send("<h2>Hi There !!!</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
