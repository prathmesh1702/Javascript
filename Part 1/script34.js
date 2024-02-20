//how to iterate an object

//using for in loop
// const person = {
//   name: "Prathmesh",
//   age: 22,
//   hobbies: ["Sleeping", "Playing Guitar"],
// };
// for (let key in person) {
//   console.log(key);
// }

//getting values of the key as output
// const person = {
//   name: "Prathmesh",
//   age: 22,
//   hobbies: ["Sleeping", "Playing Guitar"],
// };
// for (let key in person) {
//   console.log(person[key]);
// }

//getting the entire key value pair as the output
// const person = {
//   name: "Prathmesh",
//   age: 22,
//   hobbies: ["Sleeping", "Playing Guitar"],
// };
// for (let key in person) {
//   console.log(`${key}:${person[key]}`);
// }


//Object.keys
const person={
    name:"Pratham",
    age:22,
    hobbies:["Sleeping","Playing Guitar"]
}
console.log(Object.keys(person));

