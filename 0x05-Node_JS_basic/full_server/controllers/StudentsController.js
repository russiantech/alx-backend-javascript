import { readDatabase } from '../utils.js';

export default class StudentsController {
  /**
   * Handles the GET request to fetch all students.
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   */
  static async getAllStudents(req, res) {
    const dbFile = req.app.get('dbFile');

    try {
      const students = await readDatabase(dbFile);
      let response = 'This is the list of our students\n';
      response += `Number of students: ${Object.values(students).flat().length}\n`;
      Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).forEach((field) => {
        response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });
      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }


  /**
   * Handles the GET request to fetch students by major.
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   */

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const dbFile = req.app.get('dbFile');

    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(dbFile);
      if (!students[major]) {
        res.status(200).send('List:');
      } else {
        res.status(200).send(`List: ${students[major].join(', ')}`);
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
