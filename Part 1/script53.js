// map() method

// const nums = [1, 2, 3, 4];
// const square = nums.map(function (number) {
//   return number * number;
// });
// console.log(square);

//how it is mostly used?
// const users = [
//   { firstName: "Prathmesh", lastName: "Buradkar" },
//   { firstName: "Susan", lastName: "Steward" },
//   { firstName: "Daniel", lastName: "Smith" },
//   { firstName: "Ariel", lastName: "Winters" },
// ];
// const fullName = users.map(function (userData) {
//   return userData.firstName +" "+ userData.lastName;
// });
// console.log(fullName);

const users = [
    { firstName: "Prathmesh", lastName: "Buradkar" },
    { firstName: "Susan", lastName: "Steward" },
    { firstName: "Daniel", lastName: "Smith" },
    { firstName: "Ariel", lastName: "Winters" },
  ];
  const fullName = users.map(function (userData) {
    return `${userData.firstName} ${userData.lastName}`
  });
  console.log(fullName);
  