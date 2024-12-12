

import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import axios from "axios";

export default function FormPopUp({ open, onClose, type, editnewsdata }) {
  const [formNews, setFormNews] = useState({
    title: "",
    tag: "",
    target: "",
    cover: "",
  });

  const [coverPreview, setCoverPreview] = useState(""); // Added for image preview

  useEffect(() => {
    if (editnewsdata && editnewsdata._id !== formNews._id) {
      setFormNews({
        title: editnewsdata.title || "",
        tag: editnewsdata.tag || "",
        target: editnewsdata.target || "",
        cover: editnewsdata.cover || "",
        _id: editnewsdata._id,
      });
      if (editnewsdata.cover) {
        setCoverPreview(editnewsdata.cover); 
      }
    }
  }, [editnewsdata]);

  const handleChanges = (e) => {
    const { name, value, files } = e.target;

    if (name === "cover") {
      setFormNews({ ...formNews, cover: files[0] });
      setCoverPreview(URL.createObjectURL(files[0])); 
    } else {
      setFormNews({ ...formNews, [name]: value });
    }
  };

  const handleFormPopUpSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", formNews.title);
    formData.append("tag", formNews.tag);
    formData.append("target", formNews.target);
    formData.append("cover", formNews.cover);

    let endpoint;
    let method;

    if (editnewsdata) {
      endpoint = `http://localhost:3000/new-article/editNew/${editnewsdata._id}`;
      method = "PUT";
    }
    else if(type==="blogs"){
       endpoint = "http://localhost:3000/admin/blogs/createBlogs";
       method = "POST";
    }
    else{
       endpoint = "http://localhost:3000/new-article/createNewArticle";
       method = "POST";
    }

    try {
      const response = await axios.request({
        method: method,
        url: endpoint,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("data", response.data);
      setFormNews(response.data);
      onClose();
    } catch (error) {
      console.log(
        "Some Errors from frontend during FormPopUP submit",
        error.message
      );
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form className="d-flex flex-column p-3" onSubmit={handleFormPopUpSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formNews.title}
            onChange={handleChanges}
            placeholder="Enter title"
            className="form-control"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            id="tag"
            name="tag"
            value={formNews.tag}
            onChange={handleChanges}
            placeholder="Enter tag"
            className="form-control"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="target" className="form-label">
            Blog Link
          </label>
          <input
            type="text"
            id="link"
            name="target"
            value={formNews.target}
            onChange={handleChanges}
            placeholder="Enter blog link"
            className="form-control"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="cover" className="form-label">
            Cover Image
          </label>

          {coverPreview && (
            <div>
              <img
                src={coverPreview}
                alt="Cover Preview"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            </div>
          )}
          <input
            type="file"
            id="cover"
            name="cover"
            onChange={handleChanges}
            className="form-control"
          />
        </div>

        <DialogActions className="d-flex justify-content-center pb-3">
          <button className="btn btn-danger" type="submit">
            {editnewsdata ? "Update" : "Submit"}
          </button>
          <button className="btn btn-primary" type="button" onClick={onClose}>
            Cancel
          </button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
