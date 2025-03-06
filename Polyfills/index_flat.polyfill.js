const nestedArr = [
  1,
  2,
  3,
  4,
  5,
  [1, 513, 53, 1124],
  [2, 3, 4, 5],
  [6, 7, 8, 9, ["c2", "c3", "c4"]],
  [10, 11, 12, 13, ["c5", "c6", "c7", ["c8", "c9", "c10"]]],
];

const flatArr = nestedArr.flat(1);
console.log(flatArr);
