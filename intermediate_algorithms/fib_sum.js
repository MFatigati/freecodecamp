// My initial solution

function sumFibs(num) {

  let fibA = 1;
  let fibB = 0;
  let fibNum = 1;
  let fibSum = 1;
  
  while (fibNum <= num) {
      fibNum = fibA + fibB;
      fibA = fibA + fibB;
      fibB = fibA - fibB;
      if (fibNum % 2 !== 0 && fibNum <= num) {
        fibSum = fibSum + fibNum;
        console.log(fibSum)
      }
  
    }
  
  
    return fibSum;
  }
  
  sumFibs(75025);

// LS solution

function sumFibs(num) {

  let fibCurrent = 1;
  let fibPrevious = 0;
  let fibSum = 0;
  
  while (fibCurrent <= num) {
      if (fibCurrent & 2 !== 0) {
      fibSum = fibSum + fibCurrent;}
  
      fibCurrent = fibCurrent + fibPrevious;
      fibPrevious = fibCurrent - fibPrevious;
  }
  
  console.log(fibSum)
    return fibSum;
  }
  
  sumFibs(75025);

  /*
  1
  1
  1 + 1 = 2
  1 + 2 = 3
  2 + 3 = 5
  3 + 5 = 8
   
  1 = 1 + 0
  2 = 1 + 1
  3 = 2 + 1
  5 = 3 + 2
  8 = 5 + 3
  
  */