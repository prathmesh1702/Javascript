// filter() method

//create a function to filter out even numbers in the array
// const numbers = [1, 2, 3, 4, 5];
// const isEven = function (num) {
//   return num % 2 === 0;
// };
// const res = numbers.filter(isEven);
// console.log(res);

//method 1
// const numbers = [2, 4, 5, 6, 7, 8];
// const isEven = numbers.filter(function (num) {
//   return num % 2 === 0;
// });
// console.log(isEven);

//method 2: using arrow function
// const numbers = [2, 4, 5, 6, 7, 8, 9, 10];
// const isEven = numbers.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(isEven);

//create a function to filter out odd numbers in the array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isOdd = numbers.filter((num) => {
  return num % 2 !== 0;
});
console.log(isOdd);
