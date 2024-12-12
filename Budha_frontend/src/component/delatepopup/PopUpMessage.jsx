import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import ErrorOutlineSharpIcon from "@mui/icons-material/ErrorOutlineSharp";
import axios from "axios";

const PopUpMessage = ({ open, onClose, articleId, type, onDelete }) => {
  const handleDelete = async () => {
    if (articleId) {
      try {
        onDelete(articleId);

        const endpoint =
          type === "contact"
            ? `http://localhost:3000/admin/contact/delete/${articleId}`
            : type === "news"
            ? `http://localhost:3000/new-article/deleteArticle/${articleId}`
            : type === "blogs"
            ? `http://localhost:3000/admin/blogs/deleteBlogs/${articleId}`
            : null;

        if (!endpoint) throw new Error("Invalid type provided for deletion");

        await axios.delete(endpoint);

        onClose();
      } catch (error) {
        console.error(`Error deleting ${type}:`, error.message);
        alert("Failed to delete contact from the server. Please try again.");
      }
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className="d-flex justify-content-center py-4">
        <ErrorOutlineSharpIcon style={{ fontSize: "40px" }} />
      </div>
      <p className="fw-bold p-3">Are you sure you want to delete this card?</p>
      <DialogActions className="d-flex justify-content-center pb-3">
        <button className="btn btn-danger" onClick={handleDelete}>
          Confirm
        </button>
        <button className="btn btn-primary" onClick={onClose}>
          Cancel
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default PopUpMessage;
