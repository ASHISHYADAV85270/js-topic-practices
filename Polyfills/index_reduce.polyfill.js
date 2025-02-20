const arr = [1, 2, 3, 4, 5, 6, 7];
// callback,initial value
// const totalSum = arr.reduce((accumulator, item, index, self) => {
//   return accumulator + item;
// }, 5);

Array.prototype.myReduce = function (callback, initialValue = 0) {
  if (!callback) {
    throw Error("myReduce: no callback provided");
  }

  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    const currValue = callback(initialValue, arr[i], i, arr);
    initialValue = currValue;
  }
  return initialValue;
};

const totalSum = arr.myReduce((accumulator, item, index, self) => {
  return accumulator * item;
},1);

console.log(totalSum);
