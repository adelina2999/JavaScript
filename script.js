let array = [10, 11, 12, 13, 14]

let array1 = [10, 11, 12, 13, 14, 15, 16]
array1.length = 3

let array2 = [1, 2]
array2.push('Adelina')
array2.unshift('Vadim')

let array3 = array2
array3.pop()
array3.shift()

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(array1)
console.log(array.length + " - array length") 
console.log(array2 + " - added new elements to the array2")
console.log(array3 + " - deleted the first and the last element from array")
console.log(matrix[2][2])
console.log(matrix[1][0])
console.log(Array(5).fill(7) + " - initializing an array of 5 elements, and fill each element with 7")
