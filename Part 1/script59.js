// some() method

// create a function which checks whether the given elements in the array are even or not return true if one of the elements in the array is even
// const number = [1, 2, 5, 7];
// const ans = number.some((num) => {
//   return num % 2 === 0;
// });
// console.log(ans);

// const number = [1, 3, 5, 7];
// const ans = number.some((num) => {
//   return num % 2 === 0;
// });
// console.log(ans);

// how some() method is actually used?
// create a function that returns true if there are products in the array "userCart" whose price is more than 50000
const products = [
  { productid: 1, productName: "Mobile", price: 20000 },
  { productid: 2, productName: "TV", price: 30000 },
  { productid: 3, productName: "Home Theatre", price: 90000 },
  { productid: 2, productName: "Macbook", price: 200000 },
];
const ans = products.some((e) => {
  return e.price > 50000;
});
console.log(ans);
