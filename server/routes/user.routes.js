const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller.js");

router.route("/signin").post(UserController.signin);

router.route("/signup").post(UserController.signup);

module.exports = router;
