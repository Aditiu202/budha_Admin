const ContactsModel = require("../model/contactModel");

const AllContact = async (req, res) => {
  try {
    let contactdata = await ContactsModel.find();
    res.json(contactdata);
  } catch (error) {
    console.log("Some Error occur during the Contact", error.message);
  }
};

const createContact = async (req, res) => {
  try {
    const {
      name,
      phoneNo,
      email,
      industryName,
      howDidYouHear,
      queryRelated,
      query,
      maplink,
    } = req.body;
    const newContact = new ContactsModel({
      name,
      phoneNo,
      email,
      industryName,
      howDidYouHear,
      queryRelated,
      query,
      maplink,
    });
    console.log(newContact);
    await newContact.save();
  } catch (error) {
    console.log(
      "Some Error occur during the creation of Contact",
      error.message
    );
  }
};

const ContactDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContact = await ContactsModel.findByIdAndDelete(id); 
    if (!deletedContact) {
      return res.status(404).send({ message: "Contact not found" });
    }
    res.status(200).send({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  AllContact,
  ContactDelete,
  createContact,
};
