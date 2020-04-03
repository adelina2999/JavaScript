function sameLastDigit (a, b, c) {
    return (a % 10 === b % 10) ||
           (a % 10 === c % 10) ||
           (b % 10 === c % 10)
}

console.log(sameLastDigit (10, 20, 30))
console.log(sameLastDigit (10, 20, 35))
console.log(sameLastDigit (11, 22, 33))
