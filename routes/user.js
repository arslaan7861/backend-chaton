const express = require("express");
const router = express.Router();
const authUser = require("../middlewares/auth");

const {
  registerUser,
  loginUser,
  checkUsername,
  updateuser,
  getUser,
} = require("../controllers/user");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser).get(authUser, getUser);
router.route("/update").post(authUser, updateuser);

module.exports = router;
