#!/usr/bin/node

const express = require('express');
const fs = require('fs');
const path = require('path');

// Create an instance of express
const app = express();
const port = 1245;

/**
 * Reads the CSV file asynchronously and returns student data.
 * @param {string} filePath - The path to the CSV file.
 * @returns {Promise} - A promise that resolves to an array of student objects.
 */
const countStudents = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter(line => line);
      const students = {};
      let totalStudents = 0;

      lines.slice(1).forEach((line) => {
        const [firstname, lastname, age, field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
        totalStudents++;
      });

      resolve({ totalStudents, students });
    });
  });
};

// Route handler for root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route handler for /students path
app.get('/students', (req, res) => {
  const dbFile = process.argv[2];
  if (!dbFile) {
    res.send('This is the list of our students');
    return;
  }

  countStudents(dbFile)
    .then(({ totalStudents, students }) => {
      let response = 'This is the list of our students\n';
      response += `Number of students: ${totalStudents}\n`;
      for (const [field, names] of Object.entries(students)) {
        response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      res.send(response.trim());
    })
    .catch((error) => {
      res.send(error.message);
    });
});

// Set the application to listen on port 1245
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Export the app variable
module.exports = app;
