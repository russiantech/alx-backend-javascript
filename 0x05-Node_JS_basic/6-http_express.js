#!/usr/bin/node

// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Set the application to listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Export the app variable
module.exports = app;
