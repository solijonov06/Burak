import dotenv from "dotenv"; //in commonjs  const dotenv = require("dotenv")

dotenv.config();

console.log("PORT:", process.env.PORT);

console.log("MONGO_URL:", process.env.MONGO_URL);

import mongoose from "mongoose";

mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data)=>{
        console.log("MongoDB connected successfully");
        const PORT = process.env.PORT ?? 3003;
        console.log("Database name:", data.connection.name);
    })
    .catch((err)=>{
        console.error("MongoDB connection error:", err);
    });