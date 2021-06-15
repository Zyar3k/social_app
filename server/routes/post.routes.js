const express = require("express");
const router = express.Router();

const PostController = require("../controllers/post.controller.js");
const auth = require("../middleware/auth.js");

router.route("/").get(PostController.getPosts);

router.route("/").post(auth, PostController.createPost);

router.route("/:id").patch(auth, PostController.updatePost);

router.route("/:id").delete(auth, PostController.deletePost);

router.route("/:id/likePost").patch(auth, PostController.likePost);

module.exports = router;
