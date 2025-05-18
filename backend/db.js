// Import mongoose to handle MongoDB connections
const mongoose = require("mongoose");

// Asynchronous function to connect to MongoDB
const connectDB = async () => {
  try {
    // Attempt to connect to the local MongoDB database named "time_tracker"
    await mongoose.connect("mongodb://localhost:27017/time_tracker", {
      useNewUrlParser: true,        // Use new URL string parser
      useUnifiedTopology: true,     // Use new server discovery and monitoring engine
    });
    console.log("MongoDB connected"); // Success message
  } catch (err) {
    console.error(err.message); // Print error message
    process.exit(1);            // Exit process with failure
  }
};

// Export the connection function for use in other files
module.exports = connectDB;
