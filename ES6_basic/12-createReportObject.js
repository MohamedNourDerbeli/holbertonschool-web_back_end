export default function createReportObject(employeesList) {
  const report = {
    allEmployees: {
      ...employeesList,
    },
  };
  report.getNumberOfDepartments = () => Object.keys(report.allEmployees).length;
  return report;
}
