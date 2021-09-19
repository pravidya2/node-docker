const User = require("../models/userModel");

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
