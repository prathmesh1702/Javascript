//objects in arrays
// const users = [
//   { userId: 1, userName: "Pratham", gender: "Male" },
//   { userId: 2, userName: "Mahesh", gender: "Male" },
//   { userId: 3, userName: "Prateek", gender: "Male" },
// ];

// console.log(users);

//using loops
const users = [
  { userId: 1, userName: "Pratham", gender: "Male" },
  { userId: 2, userName: "Mahesh", gender: "Male" },
  { userId: 3, userName: "Prateek", gender: "Male" },
];

for (let user of users) {
  console.log(user.gender);
}
