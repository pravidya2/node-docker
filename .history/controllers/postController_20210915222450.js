const post = require("../models/postModel");

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      status: "success",
      results: posts.length,
      data: { posts },
    });
  } catch (e) {
    res.status(400).json({ status: "fail" });
  }
};

exports.getOnePost = async (req, res, next) => {
  try {
    const posts = await Post.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: { posts },
    });
  } catch (e) {
    res.status(400).json({ status: "fail" });
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const posts = await Post.create(req.body);
    res.status(200).json({
      status: "success",
      data: { posts },
    });
  } catch (e) {
    res.status(400).json({ status: "fail" });
  }
};
