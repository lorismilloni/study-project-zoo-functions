const { species, employees } = require('../data/zoo_data');

function funcionarios() {
  const infos = employees.map(({ id, firstName, lastName, responsibleFor }) => {
    const objFuncionario = {
      id,
      fullName: `${firstName} ${lastName}`,
    };
    objFuncionario.species = responsibleFor
      .map((idAnimal) => species
        .find((especie) => especie.id === idAnimal).name);
    objFuncionario.locations = responsibleFor
      .map((idAnimal) => species
        .find((especie) => especie.id === idAnimal).location);
    // console.log(responsibleFor);
    // console.log(objFuncionario, 'aqui');
    return objFuncionario;
  });
  return infos;
}

// console.log(funcionarios());
// {
//   id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//   fullName: 'Nigel Nelson',
//   species: [ 'lions', 'tigers' ],
//   locations: [ 'NE', 'NW' ],
// }

function existeFuncionario({ name, id }) {
  return employees.some((f) => name === f.firstName || name === f.lastName || id === f.id);
}

function getEmployeesCoverage(objetoRecebido) {
  // seu código aqui
  if (objetoRecebido === undefined) {
    // console.log('entrou no if');
    return funcionarios();
  } if (existeFuncionario(objetoRecebido) === false) {
    throw new Error('Informações inválidas');
  } if (objetoRecebido.id) {
    const achaPorId = funcionarios().find((fulano) => fulano.id === objetoRecebido.id);
    // console.log('será?');
    return achaPorId;
  } if (objetoRecebido.name) {
    const achaPorName = funcionarios()
      .find((fulano) => fulano.fullName.includes(objetoRecebido.name));
    return achaPorName;
  }
  // return existeFuncionario(objetoRecebido);
}

// Ajuda recebida Alessandro Achtenberg.
// Ajuda recebida Leonardo Vogel.

// console.log(existeFuncionario({ id: 'Id inválido' }));
// console.log(getEmployeesCoverage({ id: 'Id inválido' }));

module.exports = getEmployeesCoverage;
// {
//   id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//   fullName: 'Nigel Nelson',
//   species: [ 'lions', 'tigers' ],
//   locations: [ 'NE', 'NW' ],
// },
// {
//   id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
//   fullName: 'Burl Bethea',
//   species: [ 'lions', 'tigers', 'bears', 'penguins' ],
//   locations: [ 'NE', 'NW', 'NW', 'SE' ],
// },
// {
//   id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
//   fullName: 'Ola Orloff',
//   species: [ 'otters', 'frogs', 'snakes', 'elephants' ],
//   locations: [ 'SE', 'SW', 'SW', 'NW' ],
// },
// {
//   id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
//   fullName: 'Wilburn Wishart',
//   species: [ 'snakes', 'elephants' ],
//   locations: [ 'SW', 'NW' ],
// },
// {
//   id: '9e7d4524-363c-416a-8759-8aa7e50c0992',
//   fullName: 'Stephanie Strauss',
//   species: [ 'otters', 'giraffes' ],
//   locations: [ 'SE', 'NE' ],
// },
// {
//   id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
//   fullName: 'Sharonda Spry',
//   species: [ 'otters', 'frogs' ],
//   locations: [ 'SE', 'SW' ],
// },
// {
//   id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
//   fullName: 'Ardith Azevado',
//   species: [ 'tigers', 'bears' ],
//   locations: [ 'NW', 'NW' ],
// },
// {
//   id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
//   fullName: 'Emery Elser',
//   species: [ 'lions', 'bears', 'elephants' ],
//   locations: [ 'NE', 'NW', 'NW' ],
// },
