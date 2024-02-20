//nested destructuring
// const users = [
//   { userId: 1, userName: "Pratham", gender: "Male" },
//   { userId: 2, userName: "Mohit", gender: "Male" },
//   { userId: 3, userName: "Roy", gender: "Male" },
// ];

// const [user1, user2, user3] = users;
// console.log(user1);

//actual nested destructuring
const users = [
  { userId: 1, userName: "Pratham", gender: "Male" },
  { userId: 2, userName: "Mohit", gender: "Male" },
  { userId: 3, userName: "Roy", gender: "Male" },
];

const [{ userId, gender }] = users;
console.log(userId);
console.log(gender);
