const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const especies = [];

  if (ids === undefined) {
    return especies;
  }

  data.species.forEach((specie) => {
    ids.forEach((id) => {
      if (specie.id === id) {
        especies.push(specie);
      }
    });
  });
  return especies;
  // return species.filter((specie) => ids.includes(specie.id));
}

// console.log(getSpeciesByIds('89be95b3-47e4-4c5b-b687-1fabf2afa274', '0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
