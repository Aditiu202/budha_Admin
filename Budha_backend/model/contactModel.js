const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  phoneNo: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  industryName: {
    type: String,
    required: true,
  },

  howDidYouHear: {
    type: String,
    required: true,
  },

  queryRelated: {
    type: String,
    required: true,
  },

  query: {
    type: String,
    required: true,
  },

  maplink: {
    type: String,
    required: true,
  },
});

const ContactsModel = mongoose.model("contact", ContactSchema);

module.exports = ContactsModel;
