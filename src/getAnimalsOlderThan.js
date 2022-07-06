const data = require('../data/zoo_data');

const animais = data.species;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const procurarAnimal = animais.find((resultado) => resultado.name === animal);
  const idadeMinima = procurarAnimal.residents.every((result) => result.age >= age);
  return idadeMinima;
}

// console.log(getAnimalsOlderThan('tigers', 3));

// Requisito feito com ajuda do Rafhael Oliveira.

module.exports = getAnimalsOlderThan;
