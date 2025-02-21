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
// b1("A+");

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw Error(`${this} is not callable`);
  }
  context.referenceFn = this;
  return function (...otherParams) {
    context.referenceFn(...args, ...otherParams);
  };
};

const b1 = printData.myBind(userData, 20);
b1("A+");