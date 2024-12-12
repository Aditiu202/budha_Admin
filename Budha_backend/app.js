require("dotenv").config({ path: "./.env" });
const cors = require("cors");
const express = require("express");
const app = express();
const connection = require("./model/databaseConnection");
const newArticleRouter = require("./router/newsRouter");
const contactRouter = require("./router/contactRouter");
const blogs = require("./router/blogRouter");
const path = require("path");

app.use(express.json());

const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

connection().then((res) => {
  app.listen(process.env.PORT, (req, res) => {
    console.log("Server is working properly");
  });
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/uploadsBlogs", express.static(path.join(__dirname, "uploadsBlogs")));



app.use("/new-article", newArticleRouter);

app.use("/admin/contact", contactRouter);

app.use("/admin/blogs", blogs);
