function sumOfTwoIntegers(int1, int2) {
    if(int1 + int2 >= 50 && int1 + int2 <= 80) {
        return 65;
    } else {
        return 80;
    }
}
console.log(sumOfTwoIntegers(39,14));
console.log(sumOfTwoIntegers(1, 2));
console.log(sumOfTwoIntegers(1, 81));
