function maxEvenNumber() {
  let arrayOfNumbers = [1, -9, 0, 5, -4, 22, 23]
  let maxNumber = arrayOfNumbers[0]

  for(let i = 0; i < arrayOfNumbers.length; i++) {
    if((arrayOfNumbers[i] > maxNumber) && (arrayOfNumbers[i] % 2 == 0)) {
      maxNumber = arrayOfNumbers[i]
    }
  }
  return maxNumber
}
console.log(maxEvenNumber())
