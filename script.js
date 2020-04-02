function numberFrom40to60(a) {
    if(a >= 40 && a <= 60) {
        return true
    }
    return false
}

function maxNumber(a, b) {
  if(numberFrom40to60(a) && numberFrom40to60(b)) {
      if(a > b) {
          return "a is max"
      }else if(b > a) {
          return "b is max"
      }else {
          return "both are equal"
      }
  }
  return "At least one number is not in range"
}

console.log(maxNumber(44, 45))
console.log(maxNumber(12, 56))
console.log(maxNumber(45, 44))
console.log(maxNumber(12, 11))
console.log(maxNumber(44, 44))
