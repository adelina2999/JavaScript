let alphabet = "abcdefghijklmnopqrstuvwxyz"
function changeTheLetterOfString(str) {
    let newStr = ''
    for(let i = 0; i < str.length; i++) {
        for(let l = 0; l < alphabet.length; l++) {
            if (str[i] === alphabet[l]) {
                newStr = newStr + alphabet[l + 1] 
            }
        }
    }
    
    return newStr
}

console.log(changeTheLetterOfString("adelina"))
console.log(changeTheLetterOfString("vadim"))
