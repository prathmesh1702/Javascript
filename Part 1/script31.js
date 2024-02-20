//array destructuring

/*without array destructuring
create an array and store its elements in variables */
// const arr = ["value1", "value2"];
// let var1 = arr[0];
// let var2 = arr[1];
// console.log("Value of var1 is:",var1);
// console.log("Value of var2 is:",var2);

/* using array destructuring create an array and store its elements in variables */
// const arr = ["Value1", "Value2"];
// const [var1, var2] = arr;
// console.log("The value of var1 is:", var1);
// console.log("The value of var2 is:", var2);

// const arr = ["Value1"];
// const [var1, var2] = arr;
// console.log("The value of var1 is:", var1);
// console.log("The value of var2 is:", var2);

// const arr = ["Value1", "Value2", "Value3"];
// const [var1, , var2] = arr;
// console.log("The value of var1 is:", var1);
// console.log("The value of var2 is:", var2);

const arr = ["Value1", "Value2", "Value3", "Value4"];
const [var1, var2, ...newArr] = arr;
console.log("The value of var1 is:", var1);
console.log("The value of var2 is:", var2);
console.log(newArr);
