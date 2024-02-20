//function expression

// const singHappyBirthday = function () {
//   console.log("Happy Birthday to you");
// };

// singHappyBirthday();

// const sumTwoNumbers = function (num1, num2) {
//   return num1 + num2;
// };
// const res = sumTwoNumbers(2, 9);
// console.log(res);

// const sumThreeNumbers = function (num1, num2, num3) {
//   return num1 + num2 + num3;
// };
// const res = sumThreeNumbers(5, 2, 9);
// console.log(res);

// const isEven = function (num) {
//   return num % 2 === 0;
// };
// const res = isEven(2);
// console.log(res);

// const firstChar = function (anyString) {
//   return anyString[0];
// };
// const res = firstChar("abc");
// console.log(res);

const findTarget = function (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return [i];
    }
  }
  return -1;
};
const arr = [1, 2, 3, 5, 6, 7, 8];
const res = findTarget(arr, 2);
console.log(res);
