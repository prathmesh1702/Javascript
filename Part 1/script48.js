// Rest Parameters

//without rest parameter
//what if we want to assign the values from 6 to 1 to the parameter c?
// function myApp(a, b, c) {
//   console.log(`The of a is: ${a}`);
//   console.log(`The value of b is ${b}`);
//   console.log(`The value of c is: ${c}`);
// }

// myApp(4, 5, 6, 7, 8, 9, 0, 1);

//with rest parameter
// function myApp(a, b, ...c) {
//   console.log(`The of a is: ${a}`);
//   console.log(`The value of b is ${b}`);
//   console.log(`The value of c is: ${c}`);
// }
//
// myApp(4, 5, 6, 7, 8, 9, 0, 1);

// function myApp(a, b, ...c) {
//   console.log(`The of a is: ${a}`);
//   console.log(`The value of b is ${b}`);
//   console.log(`The value of c is:`,c);
// }
//
// myApp(4, 5, 6, 7, 8, 9, 0, 1);

function addAll(...nums) {
  let total = 0;
  for (let number of nums) {
    total = total + number;
  }
  return total;
}
const res = addAll(1, 2, 3, 4, 5, 6);
console.log(res);
