const arr = [1, 3, 5, 15, 4, 8];
// const newArr = arr.map((item, index, self) => {
//   return item * 2;
// });

Array.prototype.myMap = function (callback) {
  if (!callback) {
    throw Error("myMap: no callback provided");
  }

  let arr = this;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    newArr.push(result);
  }
  return newArr;
};
const newArr = arr.myMap((item, index, self) => {
  return item * 2;
});
console.log(arr);
console.log(newArr);
