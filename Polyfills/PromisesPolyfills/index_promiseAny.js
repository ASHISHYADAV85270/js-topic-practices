const t1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("T1 is resolved");
    }, 500);
  });
};
const t2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("T2 is resolved");
    }, 400);
  });
};

const t3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("T3 is rejected");
    }, 300);
  });
};

// it waits for the first promise to resolve
// Promise.any([])
//   .then((res) => {
//     console.log("res", res);
//   })
//   .catch((err) => {
//     // it is required when we dont pass the array as a parameter
//     console.log("error is this", err);
//   });

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(
        new TypeError("Promise.myAny() expects an array of promises")
      );
    }
    let n = promises.length;
    if (n === 0) {
      reject(new AggregateError([], "All promises were rejected"));
    }
    let errResults = new Array(n);
    let count = 0;
    promises.forEach(async (currPromise, index) => {
      try {
        const currResult = await currPromise;
        resolve(currResult);
      } catch (error) {
        errResults[index] = error;
        count++;
        if (count == n) {
          reject(new AggregateError(errResults, "All promises were rejected"));
        }
      }
    });
  });
};

// it waits for the first promise to resolve
Promise.myAny([t1(), t2(), t3()])
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    // it is required when we dont pass the array as a parameter
    console.log("error is this", err);
  });
