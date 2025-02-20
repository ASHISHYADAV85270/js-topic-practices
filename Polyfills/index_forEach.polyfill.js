const arr = [1, 2, 3, 4, 5];
// arr.forEach((item, index, self) => {
//   console.log(item, index, self);
// });

Array.prototype.myForEach = function (callback) {
  if (!callback) {
    throw Error("myForEach : undefined is not a function");
  }
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

arr.myForEach((item, index, self) => {
  console.log(item, index, self);
});
