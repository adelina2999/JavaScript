function maxCharacterNumber() {
  let arrayOfCharacters = ['Ayesha', 'Margaret', 'Anita', 'Savannah', 'Kira', 'Lilly', 'Gloria', 'Eleanor', 'Jemima']
  let namesWithMaxNumberOfCharacters = []
  let maxNumberOfCharacters = arrayOfCharacters[0]

  for(let i = 1; i < arrayOfCharacters.length; i++) {
    if(arrayOfCharacters[i].length >= maxNumberOfCharacters.length) {
      maxNumberOfCharacters = arrayOfCharacters[i]
      namesWithMaxNumberOfCharacters.push(arrayOfCharacters[i])

    }
  }
  return namesWithMaxNumberOfCharacters
}
console.log(maxCharacterNumber())
