const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

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

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
    });
  } catch (e) {
    res.status(400).json({ status: "failed" });
  }
};

exports.signUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashpassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      email,
      password: hashpassword,
    });
    res.status(201).json({
      status: "success",
      data: { user },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({
        status: "failed",
        message: "user not found",
      });
    }

    const isCorrect = await bcrypt.compare(password, user.password);
    if (isCorrect) {
      req.session.user = user;
      res.status(200).json({
        status: "success",
        data: { user },
      });
    } else {
      res.status(400).json({
        status: "failed",
        message: "incorrect username/password",
      });
    }
  } catch (e) {
    res.status(400).json({
      status: "failed",
    });
  }
};
