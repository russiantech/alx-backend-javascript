function getListStudentIds(students) {
  return Array.isArray(students) ? students.map(student => student.id) : [];
}

export default getListStudentIds;
