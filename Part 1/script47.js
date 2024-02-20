//Default parameters

//without default parameters
// function addTwoNumbers(a, b) {
//   if (typeof b === "undefined") {
//     b = 0;
//   }
//   return a + b;
// }
// const res = addTwoNumbers(3);
// console.log(res);

//with default parameters
// function myApp(a, b = 0) {
//   return a + b;
// }
// const res = myApp(2);
// console.log(res);

function myApp(a, b = 0) {
  return a + b;
}
const res = myApp(2, 7);
console.log(res);
