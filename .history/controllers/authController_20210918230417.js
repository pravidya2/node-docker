const User = require("../models/userModel");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await Post.find();
    res.status(200).json({
      status: "success",
      results: posts.length,
      data: { posts },
    });
  } catch (e) {
    res.status(400).json({ status: "fail" });
  }
};

exports.signUp = async (req, res) => {
  try {
    const newUser = User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
    });
  }
};
