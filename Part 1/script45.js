// Lexical scope
// function myApp() {
//   const myVar = "value1";
//   function myFunc() {
//     const myVar = "value2";
//     console.log("Inside myFunc", myVar);
//   }

//   console.log(myVar);

//   myFunc();
// }
// myApp();

// function myApp() {
//   const myVar = "value1";
//   function myFunc() {
//     console.log("Inside myFunc", myVar);
//   }

//   console.log(myVar);

//   myFunc();
// }
// myApp();

const myVar = "value1";
function myApp() {
  function myFunc() {
    console.log("Inside myFunc", myVar);
  }

  console.log(myVar);

  myFunc();
}
myApp();
