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

// Promise.all([t1(), t2()])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(
        new TypeError("Promise.myAll() expects an array of promises")
      );
    }
    const n = promises.length;
    const results = new Array(n);
    if (n == 0) {
      return resolve(results);
    }
    let ct = 0;
    promises.forEach(async (currPromise, index) => {
      try {
        const currResult = await currPromise;
        results[index] = currResult;
        ct++;
        if (ct === n) {
          resolve(results);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
};

Promise.myAll([t1(), t2(), t3()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
