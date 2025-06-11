function sum(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}
function sub(a, b) {
  return a - b;
}
function div(a, b) {
  return a / b;
}
console.log(sum(1, 2));
function doOperation(a, b, op) {
  return op(a, b);
}
console.log(doOperation(1, 2, sum));
// Demonstrating basic function arguments and return values in JavaScript
// Each function takes parameters, processes them, and returns the result
