const NewArticle = require("../model/newsModel");
const mongoose = require("mongoose");
const dummyNewData = [
    {
        cover: "https://api.innvolution.com/media/news-and-articles/section-2/cover-1714392323469-4032784006.jpg",
        title: "Gaurav Agarwal - Charting New Frontiers: The Pioneering Journey of a Healthcare Visionary",
        tag: "Spotlight",
        target: "https://www.frost.com/wp-content/uploads/2023/07/IHPL_Award-Writeup.pdf"
    },
    {
        cover: "https://api.innvolution.com/media/news-and-articles/section-2/cover-1714392397989-68985141302.jpg",
        title: "Innvolution Group raises funds from OrbiMed to accelerate growth",
        tag: "News",
        target: "https://www.expresshealthcare.in/news/innvolution-group-raises-funds-from-orbimed-to-accelerate-growth/438775/"
    }
];

const newsdata = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/budha");
        console.log("Connected to MongoDB");
        await NewArticle.insertMany(dummyNewData);
        console.log("Data is inserted in news Successfully");
    } catch (err) {
        console.error("Error inserting data:", err.message);
    } 
};

newsdata();