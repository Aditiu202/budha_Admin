const express = require("express");
const router = express.Router();
const {
  AllContact,
  ContactDelete,
  createContact,
} = require("../controller/contactController");

router.get("/index", AllContact);

router.post("/create", createContact);

router.delete("/delete/:id", ContactDelete);

module.exports = router;
