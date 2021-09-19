const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/signup", authController.signUp);
router.post("/login", authController.login);
router.route("/").get(authController.getAllUsers);

router
  .route("/:id")
  .get(authController.getOneUser)
  .delete(authController.deleteUser);

module.exports = router;
