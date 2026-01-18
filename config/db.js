require("dotenv").config();

const mongoose = require("mongoose");
let isConnected = false;

const DB_URL = process.env.DB_URL;

const connectDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(DB_URL);
    isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error("error conectando", error);
  }
};

module.exports = connectDB;
