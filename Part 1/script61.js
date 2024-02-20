// splice() method

//deleting an element
// const myArray = ["item1", "item2", "item3"];
// myArray.splice(0, 2);
// console.log(myArray);

//inserting an element
// const myArray = ["item1", "item2", "item3"];
// myArray.splice(1, 0, "inserted item");
// console.log(myArray);

//inserting and deleting together
const myArray = ["item1", "item2", "item3", "item4"];
myArray.splice(1, 2, "inserted item 1", "inserted item 2");
console.log(myArray);
