const userData = {
  name: "John",
  city: "New York",
};
function printData(age, bloodGroup) {
  console.log(
    `${this.name} is ${age} years old and has blood group ${bloodGroup} and lives in ${this.city}`
  );
}

function printName(age) {
  console.log(`${this.name} is ${age} years old `);
}

// printData.apply(userData, [20, "A+"]); // it will pass the array of arguments

Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw Error(`${this} is not callable`);
  }
  if (!Array.isArray(args)) {
    throw Error("myApply: args must be an array");
  }
  context.referenceFn = this;
  context.referenceFn(...args);
  delete context.referenceFn;
};

printData.myApply(userData, [20, "A+"]);
printName.myApply(userData, [20]);
