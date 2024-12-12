const mongoose = require("mongoose");

const connection = async (req, res) => {
  try {
    await mongoose.connect(process.env.MongooseURl);
    console.log("Database connection is Successfullly");
  } catch (error) {
    console.log("Connection Error", error.message);
  }
};

module.exports = connection;
