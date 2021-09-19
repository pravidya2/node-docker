const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");

const app = express();
const mongoURL = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/?authSource=admin`;
// console.log(mongoURL);
// console.log(MONGO_USER);
mongoose
  .connect(mongoURL)
  .then(() => console.log("successfully connected 2 the db"))
  .catch((e) => console.log(e));
app.get("/", (req, res) => {
  res.send("<h2>Hi There !!!</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
