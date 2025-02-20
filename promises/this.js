myName = "Ashish";
function printName(this) {
  var lastName = "Yadav";
  console.log("my name is ", this.myName);
  console.log(this.lastName);
}

printName(this);
