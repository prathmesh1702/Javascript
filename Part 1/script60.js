// fill() method

//how fill() method is used?
//scenario 1
// create an array that takes 10 elements and all the elements are -1 or we can say all the elements are the same value
// const myArray = new Array(10).fill(-1);
// console.log(myArray);

//scenario 2
// by using fill() method fill the elements from 1st index to 2nd index with the value 0
const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
myArray.fill(0, 1, 3);
console.log(myArray);
