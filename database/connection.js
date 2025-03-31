import mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017/chatApp").then((response) => {
    console.log("MongoDB connected successfully");
}).catch(err => {
    console.log(err);
})