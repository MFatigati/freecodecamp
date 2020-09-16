function addTogether() {
let firstArg = arguments[0];
if (typeof arguments[0] === "number") {
  if (arguments.length > 1) {
    if (typeof arguments[0] === "number" && typeof arguments[1] === "number") {
      return arguments[0] + arguments[1]
    } else return undefined;
  }
else {
    let secondSum = function(x) {
      if (typeof x === "number") {
      return firstArg + x;}
      else {return undefined}
    }
    return secondSum;
  }}
return undefined;
  }
  
  console.log(
  addTogether("http://bit.ly/IqT6zt"),
  addTogether(2)([3]))