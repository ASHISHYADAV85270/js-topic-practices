const arr = [-2, 9, 3, 0, -4, 23];
// only returns boolean value
// return true if atleast one value is satisfied
// const result = arr.some((item, index, self) => {
//   return item > 7;
// });
// console.log(result);

Array.prototype.mySome = function (callback) {
  if (!callback) {
    throw Error("mySome: no callback provided");
  }
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    if (result) {
      return true;
    }
  }
  return false;
};

const result = arr.mySome((item, index, self) => {
  return item > 6;
});
console.log(result);
