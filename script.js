function alphabeticalOrder(str) {
    let string = str.split('')
    let sorted = string.sort()
   return sorted.join('')
}

console.log(alphabeticalOrder('adelina'))
