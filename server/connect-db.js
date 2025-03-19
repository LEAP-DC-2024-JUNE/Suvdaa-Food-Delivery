import { MongoClient } from "mongodb";

export const connectDB = async () => {
  const client = new MongoClient(
    "mongodb+srv://duluuf:LM7miFmm6q0eg0Qa@cluster1.pyncrqd.mongodb.net/"
  );
  let connection;
  try {
    connection = await client.connect();
    console.log("amjilttai MongoDB tei holbogdloo");
  } catch (error) {
    console.log(error);
  }
  return connection.db("Suvdaa").collection("users");
};

// import express from "express";
// import mongoose from "mongoose";

// const server = express();
// const PORT = 3000;

// const connectDB = () => {
//   try {
//     mongoose.connect(
//       "mongodb+srv://suvdaa:Sa13b543@cluster0.jgf52.mongodb.net/"
//     );
//     console.log("connected");
//   } catch (error) {
//     console.log(error);
//   }
// };

// connectDB();
