function theValueOfEight(val1, val2) {
    if((val1 == 8 || val2 == 8) || (val1 == 8 && val2 == 8)) {
        return "The value is 8"
    } else if (val1 + val2 == 8 || val1 - val2 == 8 || val2 - val1 == 8){
        return "The result is 8"
    }
}
console.log(theValueOfEight(1, 8));
console.log(theValueOfEight(8, 8));
console.log(theValueOfEight(18, 10));
console.log(theValueOfEight(10, 18));
console.log(theValueOfEight(1, 7));
