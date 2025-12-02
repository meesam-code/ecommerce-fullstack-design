import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.MONGO_URI);
async function connectToDatabase() {
  await mongoose.connect(`${process.env.MONGO_URI}`);
}

export default connectToDatabase;
