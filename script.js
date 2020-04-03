function testNumber(x, y) {
    return (x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15);
}

console.log(testNumber(15, 9));
console.log(testNumber(7, 9));
