function specifiedCharacter(a) {
    const string = "carantina"
    if(a == string[2] || a == string[3] || a == string[4]) {
        return true
    }

    return false
}
console.log(specifiedCharacter("a"))
console.log(specifiedCharacter("1"))
console.log(specifiedCharacter("b"))
