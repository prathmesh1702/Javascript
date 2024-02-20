// find() method

//create a function that returns the string if the length of the string is 3
// const animals = ["Cat", "Dog", "Elephant", "Lion"];
// const isLength3 = animals.find((string) => {
//   return string.length === 3;
// });
// console.log(isLength3);

//how is find() method actually used?
//create a function that returns a user info based on his user id
const users = [
  { userId: 1, userName: "Harsh" },
  { userId: 2, userName: "Mohan" },
  { userId: 3, userName: "Soham" },
  { userId: 4, userName: "Jagdish" },
  { userId: 5, userName: "Harshit" },
];
const res = users.find((id) => {
  return id.userId === 3;
});
console.log(res);
