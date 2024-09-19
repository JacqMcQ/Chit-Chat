const express = require("express");
const db = require("./config/connection"); // Ensure this is your MongoDB connection
const userRoutes = require("./routes/userRoutes"); 
const thoughtRoutes = require("./routes/thoughtRoutes");

const app = express(); 
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route API
app.use("/api/users", userRoutes);
app.use("/api/thoughts", thoughtRoutes);

// Listen for database connection and start server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
