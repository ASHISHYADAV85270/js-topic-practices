const userData = {
  name: "John",
  city: "New York",
};
function printData(age, bloodGroup) {
  console.log(
    `${this.name} is ${age} years old and has blood group ${bloodGroup} and lives in ${this.city}`
  );
}
// how we can bind the function to the object
// const b1 = printData.bind(userData, 20, "A+");
// b1();

// const b1 = printData.bind(userData, 20);
// console.log(userData);

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw Error(`${this} is not callable`);
  }

  const referenceFn = this;
  return function (...otherParams) {
    context.referenceFn = referenceFn;
    context.referenceFn(...args, ...otherParams);
    delete context.referenceFn;
  };
};

const b1 = printData.myBind(userData, 20);
console.log(userData);
b1("A+");
b1(20, "A+");
