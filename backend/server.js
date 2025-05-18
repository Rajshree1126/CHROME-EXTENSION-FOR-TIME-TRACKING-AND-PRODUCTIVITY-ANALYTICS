// Import required modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse incoming JSON requests

// MongoDB connection URI from .env
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define schema for time tracking entries
const timeSchema = new mongoose.Schema({
  userId: String,
  website: String,
  timeSpent: Number, // Time spent in seconds
  date: Date,
  productive: Boolean, // Whether the time was productive or not
});

// Create model from the schema
const TimeEntry = mongoose.model("TimeEntry", timeSchema);

// Route to save time tracking data
app.post("/api/time", async (req, res) => {
  const { userId, website, timeSpent, date, productive } = req.body;

  try {
    const entry = new TimeEntry({ userId, website, timeSpent, date, productive });
    await entry.save();
    res.status(201).json({ message: "Time data saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to get weekly analytics for a user
app.get("/api/analytics/:userId", async (req, res) => {
  const { userId } = req.params;
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7); // Get date 7 days ago

  try {
    const entries = await TimeEntry.aggregate([
      { 
        $match: { 
          userId, 
          date: { $gte: oneWeekAgo } 
        } 
      },
      {
        $group: {
          _id: "$productive", // Group by productivity status
          totalTime: { $sum: "$timeSpent" }, // Sum time spent
        },
      },
    ]);
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
