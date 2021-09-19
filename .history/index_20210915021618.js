const express = require("express");
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD } = require("./config/config");

const app = express();

mongoose
  .connect(
    `mongodb://${MONGO_USER}pravidya2:prabat@mongo:27017/?authSource=admin`
  )
  .then(() => console.log("successfully connected 2 the db"))
  .catch((e) => console.log(e));
app.get("/", (req, res) => {
  res.send("<h2>Hi There !!!</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
