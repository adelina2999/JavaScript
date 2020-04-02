function lastDigit(a, b, c) {
    let aString = a.toString();
    let bString = b.toString();
    let cString = c.toString();

    if((aString[aString.length - 1] === bString[bString.length - 1]) && (aString[aString.length - 1] === cString[cString.length - 1]) && (bString[bString.length - 1] === cString[cString.length - 1])) {
        return true + ' ' + a + ', ' + b + ', ' + c;
    } else {
        return false
    }
}
console.log(lastDigit(5, 25, 35))
console.log(lastDigit(4, 7, 56))
