// Parameter Destructuring

//method 1
// const person = {
//   name: "Prathmesh",
//   age: 22,
// };
// function personDetails(obj) {
//   console.log(obj.name);
//   console.log(obj.age);
// }
// personDetails(person);

//method 2
const person = {
  name: "Prathmesh",
  age: 22,
};
function personDetails({ name, age }) {
  console.log(name);
  console.log(age);
}
personDetails(person);
