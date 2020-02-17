let min = 1;
let max = 10;
var random = Math.floor(Math.random() * (+max - +min)) + +min;
console.log("Random number: " + random);

const x = prompt("Introdu un numar intreg intre 1 si 10");

if(x == random){
    console.log("Good Work");
} else {
    console.log("Not matched");
}
