const arr = [
  { employeId: 1, name: "Ashish" },
  { employeId: 2, name: "Rahul" },
  { employeId: 3, name: "Pushpa" },
  { employeId: 3, name: "Kalpit" },
];
// only returns the first occurence
// const result = arr.find((item, index, self) => {
//   return item.employeId == 3;
// });
// console.log(result);

Array.prototype.myFind = function (callback) {
  if (!callback) {
    throw Error("myFind: no callback provided");
  }
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    if (result) {
      return arr[i];
    }
  }
  return undefined;
};

const result = arr.myFind((item, index, self) => {
  return item.employeId == 2;
});
console.log(result);
