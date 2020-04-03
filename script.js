function threeGivenNumbers (a, b, c) {
    if (a == b && b == c && a == c) {
        return 30
    } else if (a == b || b == c || a == c) {
        return 40
    } else {
        return 20
    }
}
console.log (threeGivenNumbers (1, 1, 1))
console.log (threeGivenNumbers (1, 1, 2))
console.log (threeGivenNumbers (1, 2, 3))
