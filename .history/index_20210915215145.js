const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config").Config;

const app = express();
const mongoURL = `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_IP}:${config.MONGO_PORT}/?authSource=admin`;
// console.log(mongoURL);
// console.log("====================================");
// console.log(config);
// console.log("====================================");
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("successfully connected 2 the db"))
  .catch((e) => console.log(e));
app.get("/", (req, res) => {
  res.send("<h2>Hi There !!</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
