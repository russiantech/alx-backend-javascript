// Import the 'http' module to create an HTTP server
const http = require('http');

// Define the port on which the server will listen
const PORT = 1245;

// Create an HTTP server and assign it to the variable 'app'
// The server handles incoming requests and sends a response
const app = http.createServer((req, res) => {
  // Set the response header to indicate the content type as plain text
  res.setHeader('Content-Type', 'text/plain');

  // Set the response status code to 200 (OK)
  res.statusCode = 200;

  // Send the response body with the message 'Hello Holberton School!'
  res.end('Hello Holberton School!');
});

// Make the server listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Export the server instance 'app' to be used in other modules if needed
module.exports = app;
