const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const config = require("./config/config").Config;
const session = require("express-session");
const connectRedis = require("connect-redis");
const { v4: uuidv4 } = require("uuid");

const { createClient } = require("redis");
let redisClient = createClient({
  host: config.REDIS_URL,
  port: config.REDIS_PORT,
});

const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(logger("dev"));
app.use(express.json()); //express to use the body
// app.use(cookieParser());

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

const RedisStore = connectRedis(session);

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    resave: true,
    saveUninitialized: true,
    secret: uuidv4(),
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 300000,
    },
  })
);
app.get("/api", (req, res) => {
  res.send("<h2>Hi There !!</h2>");
});

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/users", userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
