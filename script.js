function isColor(color) {
  switch(color) {
    case 'red':
      return 'color is red'
      break;
    case 'blue':
      return 'color is blue'
      break;
    default:
      return 'color is NOT red or blue'
      break;
  }
}

console.log(isColor('blue'))
console.log(isColor('red'))
console.log(isColor('green'))
