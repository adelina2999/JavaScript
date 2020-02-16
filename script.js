function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);  
}

let leapYear = isLeapYear(2020);
console.log(leapYear);
