import express from "express";
const router = express.Router();

import {
  getPosts,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/post.controller.js";
import auth from "../middleware/auth.js";

router.get("/", getPosts);

router.post("/", auth, createPost);

router.patch("/:id", auth, updatePost);

router.delete("/:id", auth, deletePost);

router.patch("/:id/likePost", auth, likePost);

export default router;
