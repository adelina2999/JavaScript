let a = 134;
let b = 67;

function getDistanceToOneHundred(num){
    if(num < 100) {
        return 100 - num;
     } else if(num > 100) { 
        return num - 100;
     }
}

function getNearestNumberTo100() {
    if (getDistanceToOneHundred(a) < getDistanceToOneHundred(b)) {
        console.log(`${a} is the nearest`)
    } else if (getDistanceToOneHundred(a) > getDistanceToOneHundred(b)) {
        console.log(`${b} is the nearest`)
    }

}

getNearestNumberTo100();
