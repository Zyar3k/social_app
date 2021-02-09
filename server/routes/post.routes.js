const express = require("express");
const router = express.Router();

const PostController = require("../controllers/post.controller.js");

router.route("/").get(PostController.getPosts);

router.route("/").post(PostController.createPost);

router.route("/:id").patch(PostController.updatePost);

module.exports = router;
