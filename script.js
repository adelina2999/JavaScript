let string = "w3resource"
let array = string.split('');
for(let i = 0; i < 10; i++){
    array.push(array[0])
    array = array.slice(1, 11);
    console.log(array)
}

console.log(array.join(''))
