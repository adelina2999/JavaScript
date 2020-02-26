function test50(a, b) 
{
  return ((a == 50 || b == 50) || (a + b == 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))
