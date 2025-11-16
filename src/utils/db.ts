//allows db connection
import mongoose from 'mongoose';
import dotenv from 'dotenv'; //due to MONGO_URL in .env file
dotenv.config();

//read .env file
const MONGO_URI = process.env.MONGO_URI || "mystring"; //reads .env vars (MONGO_URI) of .env file
//first will establish a connection and then will proceed
//if it doesn't establish any connection will not run the code
export const connectDB = async() => {
   try{
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("MongoDB connection error:", err);
    process.exit(1);
  }
}
