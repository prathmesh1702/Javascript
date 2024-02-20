//object destructuring
// const band = {
//   bandName: "Led Zepplin",
//   famousSong: "Stairway to Heaven",
// };

// const { bandName, famousSong } = band;
// console.log(bandName, famousSong);

//changing variable names
// const band = {
//   bandName: "Led Zepplin",
//   famousSong: "Stairway to Heaven",
// };

// const { bandName: var1, famousSong: var2 } = band;
// console.log(var1, var2);
//
const band = {
  bandName: "Led Zepplin",
  famousSong: "Stairway to Heaven",
  year: 1956,
  anotherFamousSong: "Kashmir",
};

const { bandName, famousSong, ...restProp } = band;
console.log(restProp);
