const post = require("../models/postModel");

exports.getAllPosts = (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      status: "success",
      results: posts.length,
      data: { posts },
    });
  } catch (e) {
    console.log(e);
  }
};
