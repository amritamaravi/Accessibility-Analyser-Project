// backend/server.js

const express = require('express');
require('dotenv').config();

// Import the router we just created
const mainRoutes = require('./routes/index'); // Or simply './routes'

const app = express();
const PORT = process.env.PORT || 5000;

// Tell Express to use our defined routes for the root path
app.use('/', mainRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});