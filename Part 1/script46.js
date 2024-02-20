// block scope vs function scope
// let and const are block scope
// var is a function scope

//block scope
// {
//   const firstName = "Pratham";
//   console.log(firstName);
// }

// {
//   const firstName = "Prathmesh";
//   console.log(firstName);
// }

//function scope
// {
//   var firstName = "Prathmesh";
// }
// console.log(firstName);

// {
//   var firstName = "Prathmesh";
// }

// {
//   console.log(firstName);
// }

function myApp() {
  if (true) {
    var firstName = "Prathmesh";
    console.log(firstName);
  }
  console.log(firstName);
}
myApp();
