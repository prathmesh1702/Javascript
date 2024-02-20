//Function inside function
const app = function () {
  const myFunc = () => {
    console.log("Hello from myFunc");
  };

  const addTwo = (num1, num2) => {
    return num1 + num2;
  };

  const mult = (num3, num4) => {
    return num3 * num4;
  };

  console.log("Inside app");

  //calling myFunc() function
  myFunc();
  //calling addTwo() function
  const res = addTwo(2, 3);
  console.log(res);
  //calling mult() function
  const res2 = mult(3, 5);
  console.log(res2);
};

app();
