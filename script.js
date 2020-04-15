function saySomething(message = 'goodbye', whisper = false) {
  if (whisper) {
    console.log(`%c${message}`, 'font-size:20px')
  } else {
    console.log(message)
  }
}

saySomething('hello', true)
saySomething('my name is adelina', true)
saySomething()

function squared(a) {
  return a * a
}

const newSquare = squared(3)
console.log(newSquare)
