let array = [];
for (let i = 2014; i < 2051; i++) {
    let time = new Date(i, 0, 1);
    if( time.getDay() == 0){
        array.push(time.getFullYear())
    }
}
console.log(array);