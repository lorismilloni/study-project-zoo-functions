const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return employees.find(
    (result) => result.firstName === employeeName || result.lastName === employeeName,
  );
}

// console.log(getEmployeeByName('Burl'));

// Requisito feito com ajuda do Rafhael Oliveira.

module.exports = getEmployeeByName;
