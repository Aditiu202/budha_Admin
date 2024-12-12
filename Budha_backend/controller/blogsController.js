const BlogsModel = require("../model/blogsModel");
const path = require("path");

const allblogs = async (req, res) => {
  try {
    const allblogs = await BlogsModel.find();
    res.json(allblogs);
  } catch (error) {
    console.log("Error during show all blog", error.message);
  }
};

const createBlogs = async (req, res) => {
  try {
    const { cover, tag, target, title } = req.body;
    if (!req.file.filename) {
      return res.status(400).send("Cover image is required.");
    }

    const newBlog = new BlogsModel({
      cover: `/uploadsBlogs/${req.file.filename}`,
      tag,
      target,
      title,
    });
    console.log(newBlog);
    await newBlog.save();
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).send("Error creating blog.");
  }
};

const deleteBlogs = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await BlogsModel.findByIdAndDelete(id);
    if (deletedItem) {
      res
        .status(200)
        .send({ message: "Blogs deleted successfully", deletedItem });
    } else {
      res.status(404).send({ message: "Blogs not found" });
    }
  } catch (error) {
    console.error("Error during deletion of blog:", error.message);
    res.status(500).send({ message: "Error deleting blog." });
  }
};

module.exports = {
  allblogs,
  createBlogs,
  deleteBlogs,
};
