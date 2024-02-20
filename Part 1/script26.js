//cloning an array
// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// console.log(array1===array2);

// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// array1.push("item3");
// console.log(array1);
// console.log(array2);


//cloning an array using slice()
// let array1 = ["item1","item2"];
// let array2 = array1.slice(0);
// array1.push("item3");

// console.log(array1===array2);
// console.log(array1);
// console.log(array2);


//cloning an array using concat();
// let array1 = ["item1","item2"];
// let array2 = [].concat(array1);
// array1.push("item3");

// console.log(array1===array2);
// console.log(array1);
// console.log(array2);


//by using spread operator
// let array1 = ["item1", "item2"];
// let array2 = [...array1];
// array1.push("item3");
//
// console.log(array1);
// console.log(array2);

//adding elements in array using spread operator
let array1 = ["item1", "item2"];
let array2 = [...array1, "item3", "item4"];

console.log(array1);
console.log(array2);

