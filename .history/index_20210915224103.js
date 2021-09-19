const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config").Config;

const postRouter = require("./routes/postRoutes");

const app = express();
const mongoURL = `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_IP}:${config.MONGO_PORT}/?authSource=admin`;
// console.log(mongoURL);
// console.log("====================================");
// console.log(config);
// console.log("====================================");
//This is to retry mongo connection if mongo service was not up at the time of the nodejs coming up.
const connectWithRetry = () => {
  mongoose
    .connect(mongoURL)
    .then(() => console.log("successfully connected 2 the db"))
    .catch((e) => {
      console.log(e);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();
app.get("/", (req, res) => {
  res.send("<h2>Hi There !!</h2>");
});

app.use("/posts", postRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
