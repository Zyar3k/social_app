const mongoose = require("mongoose");

const Post = require("../models/post.model");

exports.getPosts = async (req, res) => {
  try {
    const postMessages = await Post.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createPost = async (req, res) => {
  const { title, message, selectedFile, creator, tags } = req.body;

  const newPostMessage = new Post({
    title,
    message,
    selectedFile,
    creator,
    tags,
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

exports.updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with tah id");
  const updatedPost = await Post.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );
  res.json(updatedPost);
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with tah id");
  await Post.findByIdAndRemove(id);
  res.json({ message: "Post deleted uccessfully" });
};
