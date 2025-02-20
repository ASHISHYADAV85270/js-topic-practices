// // async fnc always returns a promise
// // mtlb async agar likha tooo promise hiii return hoga
// // if u return promise then it is ok
// // if u return a val then this fnc will wrap this value inside a promise and return a promise

// async function getData() {
//   return "Namaste";
// }

// const dataPromise = getData();
// console.log(dataPromise);

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Namaste");
//   }, 2000);
// });

// function getDataOFUSERS() {
//   // here JS engine will not wait for the promise to be resolved
//   p.then((data) => {
//     console.log(data);
//   });
//   console.log("some thing to do");
// }

// getDataOFUSERS();

// async and await are used to handle promises

// const pr = new Promise((resolve, reject) => {
//   resolve("Namaste from async await");
// });

// // await is a keyboard that can be only used inside a async fnc
// async function handlePromise() {
//   const promiseData = await pr;
//   console.log(promiseData);
// }

// handlePromise();

// why async await is special

// const pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Namaste from async await");
//   }, 5000);
// });

// async function handlePromise() {
//   const promiseData = await pr;
//   console.log(promiseData);
//   console.log("some thing to do");
// }

// handlePromise();

const pr1 = new Promise((resolve, reject) => {
  console.log('Pr1 c');
  setTimeout(() => {    
    resolve("Promise 1 Data");
  }, 10000);
});
const pr2 = new Promise((resolve, reject) => {
  console.log("Pr2 c");
  setTimeout(() => {
    resolve("Promise 2 Data");
  }, 5000);
});


async function handlePromises() {
  console.log("Started ");

  const pr1Data = await pr1;
  console.log(pr1Data);

  const pr2Data = await pr2;
  console.log(pr2Data);
}

handlePromises();
