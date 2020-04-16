function goCooCoo() {
  document.body.style.backgroundColor = '#C00C00'
}

const coffeeButton = document.querySelector('.coffee-btn')
coffeeButton.onclick = function() {
  document.body.style.backgroundColor = '#C0FFEE'
}
coffeeButton.onmouseenter = goCooCoo
