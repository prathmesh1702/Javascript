// Sets in JS

//creating a set
// const numbers = new Set([1, 2, 3]);
// console.log(numbers);

//no index based access
// const numbers = new Set([1, 2, 3]);
// console.log(numbers[2]);

//adding an element
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// console.log(numbers);

// const items = ["item1", "item2", "item3"];
// const numbers = new Set();
// numbers.add(items);
// console.log(numbers);

// const numbers = new Set();
// numbers.add(["item1", "item2"]);
// numbers.add(["item1", "item2"]);
// console.log(numbers);

//has() method
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// if (numbers.has(2)) {
//   console.log("The value is present");
// } else {
//   console.log("The value is not present");
// }

//print out unique elements given in the array using Sets
// const arr = [1, 1, 4, 5, 5, 3, 6, 7, 8];
// const uniqueElements = new Set(arr);
// console.log(uniqueElements);

//calculating the length of a set
const arr = [1, 1, 4, 5, 5, 3, 6, 7, 8];
const uniqueElements = new Set(arr);
let length = 0;
for (let element of uniqueElements) {
  length++;
}
console.log(length);
