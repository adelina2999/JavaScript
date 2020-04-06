let array1 = [1, 2]
let array2 = [3, 4]
let array1_2 = array1.concat(array2)
let array2_1 = [...array2, ...array1]


console.log(array1_2) 
console.log(array2_1)
console.log(array1_2.includes(2, 1)) //array1_2 contains 2 after position 1
console.log(array1_2.includes(1, 2)) ////array1_2 does not contains 1 after position 2
