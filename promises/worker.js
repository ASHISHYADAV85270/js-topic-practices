// // worker.js
// self.onmessage = function(event) {
//     const num = event.data;

//     // Calculate the Fibonacci number
//     function fibonacci(n) {
//         if (n <= 1) return n;
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }

//     const result = fibonacci(num);

//     // Send the result back to the main thread
//     self.postMessage(result);
// };
console.log(square1); // it will give the whole fn
function square1(num) {
  var ans = num * num;
  return ans;
}


console.log(square1); // undefined
var square1 = (num) => {
  var ans = num * num;
  return ans;
};

console.log(square1); // undefined
var square1 = function (num) {
  var ans = num * num;
  return ans;
};


// this.js:1 Uncaught ReferenceError: square1 is not defined
console.log(square1);
square1 = (num) => {
  var ans = num * num;
  return ans;
};
