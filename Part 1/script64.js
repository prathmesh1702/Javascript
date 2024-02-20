// Maps in JS

//first understanding the difference b/t objects and maps
// const person = {
//   firstName: "Prathmesh",
//   age: 7,
//   1: "one",
// };
// console.log(person.firstName);
// console.log(person.age);
// console.log(person[1]);

// const person = {
//   firstName: "Prathmesh",
//   age: 7,
//   1: "one",
// };
// for (let key in person) {
//   console.log(typeof key);
// }

//Creating a map
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);
// console.log(fruits);

//Adding an element to a map
// const person = new Map();
// person.set("firstName", "Prathmesh");
// person.set("age", 7);
// person.set(1, "one");
// console.log(person);

// const person = new Map();
// person.set("firstName", "Prathmesh");
// person.set("age", 7);
// person.set(1, "one");
// person.set([1, 2, 3], "oneTwoThree");
// console.log(person);

//Acccessing elements in a map
// const person = new Map();
// person.set("firstName", "Prathmesh");
// person.set("age", 7);
// person.set(1, "one");
// console.log(person.get("firstName"));
// console.log(person.get("age"));
// console.log(person.get(1));

//Checking datatype of keys in map
// const person = new Map();
// person.set("firstName", "Prathmesh");
// person.set("age", 7);
// person.set(1, "one");
// for (let key of person.keys()) {
//   console.log(`The key is: ${key}`);
//   console.log(`The datatype of ${key} is ${typeof key}`);
// }

//Using for of loop in map
// const person = new Map();
// person.set("Name", "Ramesh");
// person.set("age", 7);
// person.set(1, "one");
// for (let key of person) {
//   console.log(key);
// }

// const person = new Map();
// person.set("Name", "Ramesh");
// person.set("age", 7);
// person.set(1, "one");
// for (let key of person) {
//   console.log(Array.isArray(key));
// }

//how to get just keys?
// const person = new Map();
// person.set("Name", "Ramesh");
// person.set("age", 7);
// person.set(1, "one");
// for (let [key] of person) {
//   console.log(key);
// }

// const person = new Map();
// person.set("Name", "Ramesh");
// person.set("age", 7);
// person.set(1, "one");
// for (let [key, value] of person) {
//   console.log(`The key is ${key}, The value is ${value}`);
// }

//how to add key-value to an object using maps?
// const person = {
//   id: 1,
//   firstName: "Rohan",
// };
// const additonalInfo = new Map();
// additonalInfo.set(person, { age: 9, gender: "male" });
// console.log(additonalInfo)
//accessing the elements in the map
const person = {
  id: 1,
  firstName: "Rohan",
};
const additonalInfo = new Map();
additonalInfo.set(person, { age: 9, gender: "male" });
// console.log(additonalInfo.get(person));
console.log(additonalInfo.get(person).age);
console.log(additonalInfo.get(person).gender);
