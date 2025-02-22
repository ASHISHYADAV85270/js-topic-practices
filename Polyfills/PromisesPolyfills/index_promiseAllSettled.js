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
    }, 200);
  });
};

const t3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("T3 is rejected");
    }, 300);
  });
};

// Promise.allSettled([t1(), t2(), t3()])
//   .then((res) => {
//     console.log("res", res);
//   })
//   .catch((err) => {
//     // it is required when we dont pass the array as a parameter
//     console.log("error is this", err);
//   });

Promise.myallSettled = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject("Promise.allSettled() expects an array of promises");
    }
    let n = promises.length;
    const results = new Array(n);
    if (n === 0) {
      resolve(results);
    }
    let ct = 0;
    promises.forEach(async (currPromise, index) => {
      try {
        const currResult = await currPromise;
        results[index] = { status: "fulfilled", value: currResult };
        ct++;
        if (ct === n) {
          resolve(results);
        }
      } catch (error) {
        results[index] = { status: "rejected", reason: error };
        ct++;
        if (ct === n) {
          resolve(results);
        }
      }
    });
  });
};

Promise.myallSettled([t1(), t2(), t3()])
  .then((res) => {
    console.log("res is", res);
  })
  .catch((err) => {
    // it is required when we dont pass the array as a parameter
    console.log("error is this", err);
  });
