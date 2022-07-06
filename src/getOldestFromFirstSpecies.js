const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const achaFuncionario = employees.find((funcionario) => funcionario.id === id).responsibleFor[0];
  // console.log(achaFuncionario);
  const { residents } = species.find((animal) => animal.id === achaFuncionario);
  // console.log({ residents });
  let idade = residents.map(({ age }) => age); // só retorna a idade num array de mesmo tamanho
  // console.log('linha 10', idade);
  idade = Math.max(...idade); // espalha cada elemento do array como um valor como a, b... para não precisar acessar cada elemento com os colchetes
  // console.log(idade);
  const maisVelho = residents.find(({ age }) => age === idade); // compara as idades e devolve o objeto inteiro;
  // console.log(maisVelho);
  return Object.values(maisVelho);
}
// console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
// Requisito feito com ajuda do Eduardo Souza.

module.exports = getOldestFromFirstSpecies;
