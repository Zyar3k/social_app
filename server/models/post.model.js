import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: { type: String },
  message: { type: String },
  name: String,
  creator: { type: String },
  tags: [String],
  selectedFile: { type: String },
  likes: { type: [String], default: [] },
  createdAt: { type: Date, default: new Date() },
});

export default mongoose.model("Post", postSchema);
