const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/signup", authController.signUp);
router.route("/").get(authController.getAllUsers);

router
  .route("/:id")
  .get(postController.getOneUser)
  .delete(postController.deleteUser);

module.exports = router;
