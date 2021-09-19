const User = require("../models/userModel");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: { users },
    });
  } catch (e) {
    res.status(400).json({ status: "failed" });
  }
};

exports.getOneUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: { user },
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
