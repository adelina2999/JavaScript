function wordUpperCase (word) {
    const array = word.split(" ")
    const wordsOfArray = []

    for(let i = 0; i < array.length; i++) {
        wordsOfArray.push(array[i].split(""))
    }

    for(let i = 0; i < wordsOfArray.length; i++) {
        wordsOfArray[i][0] = wordsOfArray[i][0].toUpperCase()    
        wordsOfArray[i] = wordsOfArray[i].join("")
    }


    return wordsOfArray.join(" ")
}

console.log(wordUpperCase("ana are mere rosii"))
