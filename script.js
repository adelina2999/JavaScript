const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
]

function isCherries(fruit) {
  return fruit.name === 'cherries'
}

function isBananas(fruit) {
  return fruit.name === 'bananas'
}

function isApples(fruit) {
  return fruit.name === 'apples'
}

console.log(inventory.find(isCherries))
console.log(inventory.find(isBananas))
console.log(inventory.find(isApples))
