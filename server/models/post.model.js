const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
  title: { type: String },
  message: { type: String },
  creator: { type: String },
  tags: [String],
  selectedFile: { type: String },
  likes: { type: [String], default: [] },
  createdAt: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Post", Post);
