import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from "./route/book.route.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

app.use(cors());

//connecting to MongoDB
try{
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to mongoDB");
}catch(error)
{
    console.log("Error: ",error);
}

//defining routes
app.use("/book",bookRoute)

app.listen(PORT,()=>{
    console.log(`Example app listening on port ${PORT}`);
});
