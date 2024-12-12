const express = require("express");
const router = express.Router();
const {
  allnews,
  createArticle,
  deleteArticle,
  EditNewArticle,
} = require("../controller/newsController");

const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.get("/news", allnews);

router.post("/createNewArticle", upload.single("cover"), createArticle);

router.put("/editNew/:id", upload.single("cover"), EditNewArticle);

router.delete("/deleteArticle/:id", deleteArticle);

module.exports = router;
