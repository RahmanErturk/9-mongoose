import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGODB_URI, { dbName: process.env.DATABASE })
  .then(() => console.log("Connected via Mongoose"))
  .catch(console.error);

mongoose.connection.on("error", (err) => console.error(err));
