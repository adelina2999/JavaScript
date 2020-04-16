const first  = 'this is a string'
const second = String('this is a string') 

console.groupCollapsed('Primitives vs Objects')
  console.log(first === second)
  console.log(
    typeof first,
    typeof String('this is a string'),
    typeof new String()
  )
console.groupEnd()

const sentence = 'this is my sentence'

console.groupCollapsed('Strings')
  console.log(first.toUpperCase()) 
  console.log(second.toLowerCase())
  console.log(sentence.startsWith('this is'))
  console.log('👩🏻‍💻'.repeat(20))
  console.log('      look at me goo'.trim())
console.groupEnd()

console.groupCollapsed('Numbers and Math') 
console.log(1..toString())
console.log((1).toString())
console.log(Number.isInteger(5))
console.log(Number.isInteger(5.5))
console.log((1.435643).toFixed(4))
console.log(
  Math.random().toFixed(3),
  Math.ceil(1.4),
  Math.floor(6.5)
)
console.groupEnd()

const myArray = ['adelina', 'vadim', 'severina']

console.group('Arrays')
  console.log(myArray.length)
  console.log(myArray.join('-'))
  console.log(myArray.push('adam'), myArray)
  console.log(myArray.pop(), myArray)

  myArray.forEach(function(user) {
    console.log(user)
  })

  myArray.forEach((user) => console.log(user))
console.groupEnd()
