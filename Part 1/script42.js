//arrow functions
// const singHappyBirthday = () => {
//   console.log("Happy birthday to you");
// };
// singHappyBirthday();

// const sumTwoNumbers = (num1, num2) => {
//   return num1 + num2;
// };
// const res = sumTwoNumbers(4, 8);
// console.log(res);

// const sumThreeNumbers = (num1, num2, num3) => {
//   return num1 + num2 + num3;
// };
// const res = sumThreeNumbers(4, 8, 2);
// console.log(res);

// const isEven = (num) => {
//   return num % 2 === 0;
// };
// const res = isEven(4);
// console.log(res);

// const firstChar = (randomString) => {
//   return randomString[0];
// };
// const res = firstChar("abc");
// console.log(res);

const findTarget = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return [i];
    }
  }
  return -1;
};
const arr = [1, 2, 3, 4, 5];
const res = findTarget(arr, 3);
console.log(res);
