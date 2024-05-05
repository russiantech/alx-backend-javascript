// Create two students
var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};
var student2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
};
// Create an array named studentsList containing the two variables
var studentsList = [student1, student2];
// Render a table using Vanilla JavaScript
var renderTable = function (students) {
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    students.forEach(function (student) {
        var row = document.createElement('tr');
        var firstNameCell = document.createElement('td');
        var locationCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
};
// Render the table for the students list
renderTable(studentsList);
//# sourceMappingURL=main.js.map