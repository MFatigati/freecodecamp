function smallestCommons(arr) {
  let greaterNum = Math.max(...arr);
  let lesserNum = Math.min(...arr);
  console.log(greaterNum, lesserNum)

  let rangeArr = []
for (let x = greaterNum; x >= lesserNum; x -= 1) {
  rangeArr.push(x);
}
console.log(rangeArr)

let multiple = rangeArr[0];

while (!rangeArr.every(x => multiple % x  === 0)) {
  multiple +=1;
}

return multiple;


// failed attempt
/*let multiple = rangeArr[0];

for (let i = 0; i < rangeArr.length; i += 1) {
  multiple = multiple * rangeArr[i + 1];
  if (rangeArr.every(x => multiple % x  === 0)) {
    return multiple;
  }

}*/

}

console.log(smallestCommons([1,5]));
console.log(smallestCommons([2,10]));
