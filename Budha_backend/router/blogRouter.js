const express = require("express");
const router = express.Router();
const {
  allblogs,
  createBlogs,
  deleteBlogs,
} = require("../controller/blogsController");
const multer = require("multer");

const upload = multer({ dest: "uploadsBlogs/" });

router.get("/blogs", allblogs);

router.post("/createBlogs", upload.single("cover"), createBlogs);

router.delete("/deleteBlogs/:id", deleteBlogs);

module.exports = router;
