const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const idades = {
    child: 0,
    adult: 0,
    senior: 0,
  };

  entrants.forEach((result) => {
    if (result.age < 18) {
      idades.child += 1;
    } else if (result.age >= 50) {
      idades.senior += 1;
    } else {
      idades.adult += 1;
    }
  });
  return idades;
}

// console.log(countEntrants(entrants));

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  // const entradas = (countEntrants(entrants));
  // return entradas;
  // const criancas = countEntrants.map((resultado) => resultado * prices.child);
  // const adultos = countEntrants.adult * prices.adult;
  // const idosos = countEntrants.senior * prices.senior;
  const visitors = Object.entries(countEntrants(entrants));
  const entradas = visitors.reduce((result, [key, value]) => { // result é o que soma, depois vem chave e valor do objeto
    const total = result + prices[key] * value; // pega as chaves de prices, o value é cada valor que está na frente dessa chave do prices
    return total;
  }, 0);

  return entradas;
}
// Requisito feito com a ajuda da Kerli Schroeder.
// console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
