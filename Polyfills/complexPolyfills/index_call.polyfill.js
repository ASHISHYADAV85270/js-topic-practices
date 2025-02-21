const userData = {
  name: "John",
  city: "New York",
};
function printData(age, bloodGroup) {
  console.log(
    `${this.name} is ${age} years old and has blood group ${bloodGroup} and lives in ${this.city}`
  );
}

printData.call(userData, 20, "A+");

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw Error(`${this} is not callable`);
  }

  context.referenceFn = this; // it will store the reference of the function that is being called
  context.referenceFn(...args);
  delete context.referenceFn;
};

// printData.myCall(userData, 20, "A+");
printData.myCall(userData, 20, "A+");
