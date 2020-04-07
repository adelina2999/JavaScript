function palindrome(word) {
    var x = /[^A-Za-z0-0]/g
    word = word.toLowerCase().replace(x, '')
    let y = word.length
    for (let i = 0; i < y/2; i++) {
        if(word[i] !== word[y - 1 - i]) {
            return false
        }
    }

    return true
}

console.log(palindrome('Adelina'))
console.log(palindrome('Ana'))
