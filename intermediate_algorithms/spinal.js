function spinalCase(str) {
let strArray = str.match(/[A-Za-z][a-z]*(?![a-z])/g)
console.log(strArray);

let newStr = strArray.join("-").toLowerCase();


  return newStr;
}
console.log(
spinalCase('This Is Spinal Tap'),
spinalCase("AllThe-small Things"),
spinalCase("thisIsSpinalTap"))