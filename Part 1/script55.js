// reduce() method

// create a function using reduce() method that gives us sum of all the numbers in the array
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });
// console.log(sum);

//create a function using reduce() method that gives us sum of all the numbers in the array and also set the initial value
// const numbers = [1, 2, 3, 4, 5];
// const res = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 100);
// console.log(res);

//Assume we have a shopping cart and some items in it. Create a function which calculates the total of all the items in the cart
const userCart = [
  { productId: 1, productName: "Mobile", price: 25000 },
  { productId: 2, productName: "TV", price: 40000 },
  { productId: 3, productName: "Laptop", price: 30000 },
];
const res = userCart.reduce((totalPrice, currentPrice) => {
  return totalPrice + currentPrice.price;
}, 0);
console.log(res);
