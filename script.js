const checkRange = (number, param1, param2) => number >= param1 && number <= param2
const a = 71
const b = 99
if(checkRange(a, 40, 60) && checkRange(b, 40, 60)){
    console.log("Is in range 40-60")
}else if (checkRange(a, 70, 100) && checkRange(b, 70, 100)){
    console.log("Is in range 70-100")
}else {
    console.log("They are not in the range")
}
