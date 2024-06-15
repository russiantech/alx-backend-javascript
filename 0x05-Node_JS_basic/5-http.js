// Import the 'http' module to create an HTTP server
const http = require('http');
// Import the 'fs' module to work with the filesystem
const fs = require('fs');
// Import the 'path' module to work with file and directory paths
const path = require('path');

// Function to count students from a CSV file
const countStudents = (dbPath) => {
  // Return a new Promise
  return new Promise((resolve, reject) => {
    // Read the database file asynchronously
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        // Reject the promise if an error occurs (e.g., file not found)
        reject(new Error('Cannot load the database'));
      } else {
        // Split the file content by new lines
        const lines = data.split('\n');
        const students = [];
        const fields = {};

        // Parse each line and extract student data
        for (const line of lines) {
          if (line.trim()) {
            const [firstname, lastname, age, field] = line.split(',');
            if (field) {
              students.push({ firstname, field });

              // Count students per field
              if (!fields[field]) {
                fields[field] = [];
              }
              fields[field].push(firstname);
            }
          }
        }

        // Create the result message
        const result = [
          `Number of students: ${students.length}`,
          ...Object.keys(fields).map(
            (field) => 
              `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`)
        ];

        // Resolve the promise with the result message
        resolve(result.join('\n'));
      }
    });
  });
};

// Define the port on which the server will listen
const PORT = 1245;

// Get the path to the database file from command-line arguments
const dbPath = process.argv[2];

// Create an HTTP server and assign it to the variable 'app'
const app = http.createServer(async (req, res) => {
  // Set the response header to indicate the content type as plain text
  res.setHeader('Content-Type', 'text/plain');

  // Handle different URL paths
  if (req.url === '/') {
    // Respond with a welcome message for the root path
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Respond with the list of students for the '/students' path
    res.statusCode = 200;
    res.write('This is the list of our students\n');
    try {
      // Count students and append the result to the response
      const studentsList = await countStudents(dbPath);
      res.end(studentsList);
    } catch (error) {
      // Handle errors (e.g., file not found) and send an error message
      res.end(error.message);
    }
  } else {
    // Respond with a 404 Not Found message for other paths
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Make the server listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Export the server instance 'app' to be used in other modules if needed
module.exports = app;
