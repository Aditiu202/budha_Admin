const ContactModel = require("../model/contactModel");
const mongoose = require("mongoose");
const dummyContactData = [
    {
       name:"Raju Sharma",
       phoneNo:"1234567890",
       email:"raju.202@gmail.com",
       industryName:"XYZ",
       howDidYouHear:'peers',
       queryRelated:'Donation',
       query:'Delay',
       maplink:'https://www.google.com/maps/place/Innvolution+Healthcare+Pvt.Ltd.,+Jaipur/@26.816845,75.5663256,15z/data=!4m6!3m5!1s0x396c49980dfcba7b:0xad3abde68e8cdb86!8m2!3d26.816845!4d75.5663256!16s%2Fg%2F11kc8m4pn1?sa=X&ved=2ahUKEwi3urzY8ZqDAxWcwTgGHdheA7AQ_BJ6BAhJEAA&entry=tts'

    },

    {
        name:"Rani Sharma",
        phoneNo:"1234567890",
        email:"rani.202@gmail.com",
        industryName:"XYZ",
        howDidYouHear:'peers',
        queryRelated:'Donation',
        query:'Delay',
        maplink:'https://www.google.com/maps/place/Innvolution+Healthcare+Pvt.Ltd.,+Jaipur/@26.816845,75.5663256,15z/data=!4m6!3m5!1s0x396c49980dfcba7b:0xad3abde68e8cdb86!8m2!3d26.816845!4d75.5663256!16s%2Fg%2F11kc8m4pn1?sa=X&ved=2ahUKEwi3urzY8ZqDAxWcwTgGHdheA7AQ_BJ6BAhJEAA&entry=tts'
 
     },

     {
        name:"Sita Sharma",
        phoneNo:"1234567890",
        email:"sita.202@gmail.com",
        industryName:"XYZ",
        howDidYouHear:'peers',
        queryRelated:'Donation',
        query:'Delay',
        maplink:'https://www.google.com/maps/place/Innvolution+Healthcare+Pvt.Ltd.,+Jaipur/@26.816845,75.5663256,15z/data=!4m6!3m5!1s0x396c49980dfcba7b:0xad3abde68e8cdb86!8m2!3d26.816845!4d75.5663256!16s%2Fg%2F11kc8m4pn1?sa=X&ved=2ahUKEwi3urzY8ZqDAxWcwTgGHdheA7AQ_BJ6BAhJEAA&entry=tts'
 
     },
  
];

const contactdata = async() => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/budha");
        console.log("Connected to MongoDB");
        await ContactModel.insertMany(dummyContactData);
        console.log("Data is inserted in news Successfully");
    } catch (err) {
        console.error("Error inserting data:", err.message);
    } 
};

contactdata();