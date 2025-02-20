console.log("Start");
setTimeout(function cb() {
  console.log("Callback");
}, 5000);

// assume it take 6 sec
fetch("some Api").then(function cbF() {
  console.log("CbF is executed ");
});
// assuming there is more code and it will take 7sec to execute all code
console.log("End");
