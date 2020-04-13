const isBelowThreshold = (currentValue) => currentValue < 40
const array1 = [1, 30, 39, 29, 10, 13]

console.log(array1.every(isBelowThreshold))

//The every() method tests whether all element in the array pass the test implemented 
//by the provided function. It returns a Boolean value
