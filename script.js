const original = 'adelina'
const clone    = 'ADELINA'

console.groupCollapsed('String')  
  console.log(original == 'adelina')
  console.log(original == clone)
  console.log(original == clone.toLowerCase())
console.groupEnd()

const num1 = 10
const num2 = '10'

console.groupCollapsed('Numbers')
  console.log(num1 == num2)
  console.log(num1 === num2)
  console.log(num1 != num2)
  console.log(num1 !== num2)
console.groupEnd()

let what
let thing = null

console.groupCollapsed('Booleans')
  console.log(Boolean(original))
  console.log(Boolean(''))
  console.log(Boolean(what))
  console.log(Boolean(thing))
  console.log(Boolean(num2))
  console.log(Boolean(num1))
  console.log(Boolean({}))
console.groupEnd()

const firstArr  = [1, 2, 3]
const secondArr = [1, 2, 3]
const firstObj  = { color: 'red'}
const secondObj = { color: 'red'}

console.groupCollapsed('Objects and Arrays')
  console.log(firstArr == secondArr)
  console.log(firstObj == secondObj)
console.groupEnd()

console.groupCollapsed('AND & OR')
  console.log(Boolean('blah') && Boolean('thing'))
  console.log(Boolean('blah') && Boolean(''))
  console.log(Boolean('blah') || Boolean(''))
  console.log(Boolean('') || Boolean(''))
console.groupEnd()
