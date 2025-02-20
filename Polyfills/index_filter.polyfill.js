const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1. Filter odd numbers
// const oddNumbers = arr.filter((item, index, self) => {
//   return item % 2 !== 0;
// });
// console.log(oddNumbers);

Array.prototype.myFilter = function (callback) {
  if (!callback) {
    throw Error("myFilter: no callback provided");
  }
  const newArr = [];
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, self);
    if (result) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const oddNumbers = arr.myFilter((item, index, self) => {
  return item % 2 !== 0;
});
console.log(oddNumbers);
