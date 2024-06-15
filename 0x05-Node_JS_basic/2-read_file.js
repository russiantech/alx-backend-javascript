// 2-read_file.js


const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        const lines = data.trim().split('\n');

        if (lines.length === 0) throw new Error('Cannot load the database');

        const students = lines.slice(1);
        const studentCount = students.length;
        console.log(`Number of students: ${studentCount}`);

        const fields = {};

        students.forEach((line) => {
            const [firstname, , , field] = line.split(',');
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstname);
        });

        for (const field in fields) {
            const count = fields[field].length;
            const list = fields[field].join(', ');
            console.log(`Number of students in ${field}: ${count}. List: ${list}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
