// forEach() array method

// create a function which takes the first element and index of an array as an input and prints the index of the array and multiplies the element by 2
// const num = [1, 2, 3, 4, 5];
// function mult(index, number) {
//   console.log("The index is: ", index);
//   console.log("The value is: ", number * 2);
// }
// mult(0, num[0]);

//do the same task for the entire array using loops
// const num = [1, 2, 3, 4, 5];
// function mult(index, number) {
//   console.log("The index is: ", index);
//   console.log("The value is: ", number * 2);
// }
// for(let i=0;i<num.length;i++){
//     mult(i,num[i])
// }

//forEach() method 1
// const num = [1, 2, 3, 4, 5];
// function mult(number, index) {
//   console.log(`The value is ${number * 2}. The index is ${index}`);
// }
// num.forEach(mult);

//forEach() method 2
// const num = [1, 2, 3, 4, 5];
// num.forEach(function (number, index) {
//   console.log(`The value is: ${number * 2}. The index is: ${index}`);
// });

//forEach(): how it is mostly used?
const users = [
  { firstName: "Prathmesh", age: 22 },
  { firstName: "Rohit", age: 21 },
  { firstName: "Aditya", age: 19 },
];
users.forEach(function (names) {
  console.log(names.firstName);
});
