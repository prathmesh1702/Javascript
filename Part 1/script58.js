// every method
// create a function that checks if all the elements in the given array are even or not
// const numbers = [2, 4, 6, 8, 10];
// const ans = numbers.every((num) => {
//   return num % 2 == 0;
// });
// console.log(ans);

// const numbers = [1, 2, 4, 6, 8];
// const ans = numbers.every((num) => {
//   return num % 2 == 0;
// });
// console.log(ans);

// how every() method is actually used?
// create a function that checks if price of every product in the array "userCart" is less than 30000
const userCart = [
  { productId: 1, productName: "Mobile", productPrice: 12000 },
  { productId: 2, productName: "Laptop", productPrice: 25000 },
  { productId: 3, productName: "TV", productPrice: 20000 },
];

const chec = userCart.every((price) => {
  return price.productPrice < 30000;
});
console.log(chec);
