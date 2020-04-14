let a   = 10
let b   = 3
let c   = 15
const d = '5'
let e   = 'my name'
const f = 'is Adelina'

console.groupCollapsed('Addition')
  console.log(a + b)
  console.log(a + d)
  console.log(e + ' ' + f)
  console.log(e += ' is batman')
console.groupEnd();

console.groupCollapsed('Multiplication')
  console.log(a * 3)
  console.log(a * b)
  console.log(b * c)
console.groupEnd();

a++
b--
--b
c += a

console.group('Incrementing')
  console.log(a)   
  console.log(b)
  console.log(c)
console.groupEnd()
