const NewsModel = require("../model/newsModel");
const path = require("path");

const allnews = async (req, res) => {
  try {
    const allnews = await NewsModel.find();
    res.json(allnews);
  } catch (error) {
    console.log("Error during show all blog", error.message);
  }
};

const createArticle = async (req, res) => {
  try {
    const { cover, tag, target, title } = req.body;
    if (!req.file.filename) {
      return res.status(400).send("Cover image is required.");
    }

    const newBlog = new NewsModel({
      cover: `/uploads/${req.file.filename}`,
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

const EditNewArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (req.file) {
      updateData.cover = req.file.path;
    }

    const editNews = await NewsModel.findByIdAndUpdate(id, updateData, {
      new: true,
    }); 
    
    if (editNews) {
      res
        .status(200)
        .send({ message: "Article edited successfully", editNews });
    } else {
      res.status(404).send({ message: "Article not found" });
    }
  } catch (error) {
    console.error("Some error occurred during the edit", error.message);
    res.status(500).send({ message: "Internal server error" });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await NewsModel.findByIdAndDelete(id);
    if (deletedItem) {
      res
        .status(200)
        .send({ message: "Article deleted successfully", deletedItem });
    } else {
      res.status(404).send({ message: "Article not found" });
    }
  } catch (error) {
    console.error("Error during deletion of new:", error.message);
    res.status(500).send({ message: "Error deleting new." });
  }
};

module.exports = {
  allnews,
  createArticle,
  deleteArticle,
  EditNewArticle,
};
