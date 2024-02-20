//spread operator

//in arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const newArr = [...arr1, ...arr2];

// console.log(newArr);

// const newArr = [...123456789];
// console.log(newArr);

//in objects
// const obj1 = {
//   key1: "val1",
//   key2: "val2",
// };

// const obj2 = {
//   key3: "val3",
//   key4: "val4",
// };

// const newObj = {
//   ...obj1,
//   ...obj2
// };

// console.log(newObj);
//
// const obj1 = {
//   key1: "val1",
//   key2: "val2",
// };

// const obj2 = {
//   key1: "value1",
//   key3: "val3",
//   key4: "val4",
// };

// const newObj = {
//   ...obj1,
//   ...obj2,
// };

// console.log(newObj);
//
// const obj1 = {
//     key1: "val1",
//     key2: "val2",
//   };

//   const obj2 = {
//     key1: "value1",
//     key3: "val3",
//     key4: "val4",
//   };

//   const newObj = {
//     ...obj2,
//     ...obj1,
//   };

//   console.log(newObj);

//adding a new key
const obj1 = {
  key1: "val1",
  key2: "val2",
};

const obj2 = {
  key1: "value1",
  key3: "val3",
  key4: "val4",
};

const newObj = {
  ...obj1,
  ...obj2,
  newKey: "newValue",
};

console.log(newObj);
