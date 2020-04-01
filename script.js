function test50to99(a, b, c ) {
    return checkInterval(a) || checkInterval(b) || checkInterval(c);
}  

function checkInterval(param) {
    return (param >= 50 && param <= 99)
}
console.log(test50to99(1, 54, 101));
console.log(test50to99(54, 78, 52));
console.log(test50to99(1, 101, 121));
