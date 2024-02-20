// Callback Functions
function myFunc2(name) {
  console.log("Inside myFunc2");
  console.log(`Your name is ${name}`);
}
function myFunc(callback) {
  console.log("Hello I am myFunc");
  callback("Prathmesh");
}
myFunc(myFunc2);
