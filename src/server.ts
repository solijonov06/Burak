import dotenv from "dotenv"; //in commonjs  const dotenv = require("dotenv")

dotenv.config();

console.log("PORT:", process.env.PORT);

console.log("MONGO_URL:", process.env.MONGO_URL);