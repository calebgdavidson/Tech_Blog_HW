const { Employee } = require('../models');

const employeeData = [
  {
    employee_name: 'Jimmy John',
    post_id: 1,
  },
  {
    employee_name: 'George Jungle',
    post_id: 2,
  },
  {
    employee_name: `Mike Wazowski`,
    post_id: 3,
  },
];

const seedEmployees = () => employee.bulkCreate(employeeData);
module.exports = seedEmployees;