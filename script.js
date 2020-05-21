let arrayOfNumbers = [1, 2, 3, 4, -1, -2, -3, -4]
let chosenArray = []
let numberOfElementsToBeDeleted = 100

let lastChosenPosition = arrayOfNumbers.length - numberOfElementsToBeDeleted

if(numberOfElementsToBeDeleted > arrayOfNumbers.length) {
  console.log('Your number is bigger than my array')
} else if(numberOfElementsToBeDeleted < 0) {
  console.log('I need a positive number')
} else if(typeof numberOfElementsToBeDeleted != 'number') {
  console.log('I need a number')
}

for(let i = 0; i < lastChosenPosition; i++) {
  chosenArray.push(arrayOfNumbers[i])
}

console.log(chosenArray)
