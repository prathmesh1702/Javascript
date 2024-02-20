//functions declaration

//creating the function
// function singHappyBirthday() {
//   console.log("Happy Birthday to you");
// }
//calling the function
// singHappyBirthday();

//example 2: Sum of two numbers
// function sumTwoNumbers(){
//     console.log(2+2)
// }
// sumTwoNumbers();

//reusable function
// function sumTwoNumbers(num1, num2) {
//   return num1 + num2;
// }
// const res = sumTwoNumbers(2);
// console.log(res);

//example 2: sum of 3 numbers
// function sumThreeNumbers(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
// const res = sumThreeNumbers(2, 3, 4);
// console.log(res);

//example 3: create a function which checks wether given number is even. If its even return true else return false
//Method 1
// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   }
// }
// console.log(isEven(2));

//Method 2
// function isEven(num) {
//   return num % 2 === 0;
// }
// console.log(isEven(2));

//example 4: create a function which takes string as an input and returns its 1st character
// function firstChar(randomString) {
//   return randomString[0];
// }
// console.log(firstChar("uewygr"));

//example 5: create a function which takes input as an array and a target and the target happens to be a number. If the target is present in the array return the index of the target otherwise return -1
function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return [i];
    }
  }
  return -1;
}

const arr = [1, 2, 4, 5, 6, 8];
const ans = findTarget(arr, 9);
console.log(ans);
