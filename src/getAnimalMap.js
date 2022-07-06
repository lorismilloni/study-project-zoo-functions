const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui
  // if (options === undefined || !options.includes()) {
  //   return whichDirection();
  // }
}

// function local(direction) {
//   return species
//     .filter(({ location }) => location === direction)
//     .map(({ name }) => name);
// }

// function whichDirection() {
//   return {
//     NE: local('NE'),
//     NW: local('NW'),
//     SE: local('SE'),
//     SW: local('SW'),
//   };
// }

// function residents() {
//   const nameSpecies = whichDirection().NE;
//   const chooseSpecies = nameSpecies
//     .find((busca) => busca.name === nameSpecies)
//     .residents.map((residentes) => residentes.name);
//   return chooseSpecies;
// }

// console.log(getAnimalMap());

module.exports = getAnimalMap;
