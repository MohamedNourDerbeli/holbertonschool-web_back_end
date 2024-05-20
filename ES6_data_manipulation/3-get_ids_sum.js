export default function getStudentIdsSum(listStudents) {
  if (!Array.isArray(listStudents)) {
    return [];
  }
  return listStudents.reduce((accumulator, item) => {
    return accumulator += item.id;
  }, 0)
}
