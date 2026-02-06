/**
 * Handles connection to MongoDB using Mongoose.
 * Uses environment variables for connection security.
 */

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1); // Exit process if DB connection fails
  }
};

module.exports = connectDB;
