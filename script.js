let string = "coronavirus"
let array = string.split('');
let last3DigitsOfString = array[array.length - 3] + array[array.length - 2] + array[array.length - 1]
let newString = last3DigitsOfString + string + last3DigitsOfString;

console.log(newString)
