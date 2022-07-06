const { species } = require('../data/zoo_data');

function countAnimals(animal = {}) {
  // seu código aqui
  // desestruturar animal para usar como variável na função
  const { specie, sex } = animal;
  const objs = {};
  species.forEach(({ name, residents }) => {
    objs[name] = residents.length;
  });
  if (specie && !sex) {
    return species
      .find((qntsAnimais) => qntsAnimais.name === specie).residents.length;
  }
  if (specie && sex) {
    return species
      .find((qualEspecie) => qualEspecie.name === specie).residents
      .filter((compare) => compare.sex === sex).length;
  }
  return objs;
}

// return (
//   species.reduce((resultado, { name, residents }) => {
//     result[name] = residents.length;
//     return result;
//   }, {})
// );

// console.log(countAnimals());

// Requisito feito com a ajuda da Yasmim Matos.

// countAnimals();

module.exports = countAnimals;
