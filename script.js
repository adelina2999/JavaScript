function mulptipleOfSeverOrEleven(x, y) {
    if (!((x % 7 == 0 || x % 11 == 0) && (y % 7 == 0 || y % 11 == 0))) {
        return (x % 7 == 0 || x % 11 == 0) || (y % 7 == 0 || y % 11 == 0)
    } else {
        return false
    }
} 
console.log(mulptipleOfSeverOrEleven(14, 21));
console.log(mulptipleOfSeverOrEleven(14, 20));
console.log(mulptipleOfSeverOrEleven(77, 77));
