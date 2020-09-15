function dropElements(arr, func) {
let length = arr.length;

for (let i = 0; i < length; i += 1) {
  if (func(arr[i])) {
    let newArr = arr.slice(i);
    console.log(newArr);
    return newArr;
  }
  
  
    
  
}
return [];
}
  dropElements([1, 2, 3], function(n) {return n < 3; });
  dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
  dropElements([0, 1, 0, 1], function(n) {return n === 1;})