function createUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
     var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
     return v.toString(16);
  });
}

let cities = [
  {
    id: createUUID(),
    name: 'Chisinau',
    population: 635994,
    stateName: 'Moldova'
  },
  {
    id: createUUID(),
    name: 'Chicago',
    population: 2693976,
    stateName: 'Illinois'
  },
  {
    id: createUUID(),
    name: 'Philadelphia',
    population: 1584064,
    stateName: 'Pennsylvania'
  },
  {
    id: createUUID(),
    name: 'Dallas',
    population: 1343573,
    stateName: 'Texas'
  },
  {
    id: createUUID(),
    name: 'Jacksonville',
    population: 911507,
    stateName: 'Florida'
  },
  {
    id: createUUID(),
    name: 'Seattle',
    population: 753675,
    stateName: 'Washington'
  },
  {
    id: createUUID(),
    name: 'Charlotte',
    population: 885708,
    stateName: 'North Carolina'
  },
  {
    id: createUUID(),
    name: 'Detroit',
    population: 670031,
    stateName: 'Michigan'
  },
  {
    id: createUUID(),
    name: 'Boston',
    population: 692600,
    stateName: 'Massachusetts'
  },
  {
    id: createUUID(),
    name: 'Woodbridge',
    population: 100145,
    stateName: 'New Jersey'
  }
]

function getStateByMaxPopulationNumber() {
  let maxNumber = cities[0].population
  for(let i = 1; i < cities.length; i++) {
    if(cities[i].population > maxNumber) {
      maxNumber = cities[i].population
    }
  }
  for(let i = 0; i < cities.length; i++) {
    if(maxNumber == cities[i].population) {
      return cities[i].stateName
    }
  }
  return ''
}

function sumOfPopulation() {
  let sum = 0
  for(let i = 0; i < cities.length; i++) {
    sum += cities[i].population
  }
  return sum
}

function sortArray() {
  return cities.sort((a, b) => a.population < b.population)
}
console.log(sortArray())
console.log(getStateByMaxPopulationNumber())
