const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  cover: {
    type: String,
    required: [true, "Cover image is required!"],
  },
  title: {
    type: String,
    required: [true, "Title is required!"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required!"],
  },
  target: {
    type: String,
    required: [true, "Target link is required!"],
  },
});

const NewsModel = mongoose.model("newsArticle", NewsSchema);

module.exports = NewsModel;
