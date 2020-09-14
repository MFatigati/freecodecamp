function uniteUnique(arr) {
  let numArg = arguments.length;
  console.log(numArg);
  let newArr = arguments[0];
  console.log(newArr)

  for (let i = 1; i < numArg; i += 1) {
    for (let j = 0; j < arguments[i].length; j += 1) {
      console.log(arguments[i][j]);
      if (newArr.indexOf(arguments[i][j]) < 0) {
        newArr.push(arguments[i][j]);
      }
      
    }
  }
  
  
    return newArr;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));