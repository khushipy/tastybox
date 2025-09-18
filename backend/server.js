const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const recipesRouter = require('./routes/recipes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/recipes', recipesRouter);

// Basic route
app.get('/', (req, res) => {
  res.send('Recipe Tracker API is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
