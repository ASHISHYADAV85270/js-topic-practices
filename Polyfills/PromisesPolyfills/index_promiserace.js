const t1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("T1 is resolved");
    }, 100);
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
    }, 500);
  });
};

// // it waits for the first promise to resolve
// Promise.race([t1(),t2(),t3()])
//   .then((res) => {
//     console.log("res", res);
//   })
//   .catch((err) => {
//     // it is required when we dont pass the array as a parameter
//     console.log("error is this", err);
//   });

Promise.myrace = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(
        new TypeError("Promise.myAny() expects an array of promises")
      );
    }
    let n = promises.length;
    if (n === 0) {
      return;
    }
    promises.forEach(async (currPromise, index) => {
      try {
        const currResult = await currPromise;
        resolve(currResult);
      } catch (error) {
        reject(error);
      }
    });
  });
};

// it waits for the first promise to resolve
Promise.myrace([t1(), t2(), t3()])
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    // it is required when we dont pass the array as a parameter
    console.log("error is this", err);
  });
