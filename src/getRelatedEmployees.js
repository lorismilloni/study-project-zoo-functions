const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  const verifyManager = employees.some((result) => result.managers.includes(id));
  return verifyManager;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else if (isManager(managerId) === true) {
    const relatedEmployees = employees
      .filter((result) => result.managers
        .includes(managerId))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
    return relatedEmployees;
  }
}

// Requisito feito com a ajuda do Rafhael Oliveira.
module.exports = { isManager, getRelatedEmployees };
