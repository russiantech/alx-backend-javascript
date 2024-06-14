import fs from 'fs';

/**
 * Reads the CSV database asynchronously and returns an object with student data.
 * @param {string} filePath - The path to the CSV file.
 * @returns {Promise<object>} - A promise that resolves to an object with arrays
 * of student first names per field.
 */


export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter(line => line);
      const students = {};

      lines.slice(1).forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      });

      resolve(students);
    });
  });
};
