/* function sumPrimes(num) {
let sum = 0;

for (let i = 2; i <= num; i += 1) { // iterate through every possible prime number up to and including num
  let primeCheck = 0;
  for (let j = 2; j < i; j += 1) { // if any number 1 is divisible without remainder by any number j, it is not prime
    if (i % j === 0) {
      primeCheck = 1;} // primeCheck will equal 1 to show that the number is not prime
  }
if (primeCheck < 1) {sum = sum + i} // if the number is less than one, we know it IS prime, so add it to the sum
}


console.log(sum);

  return sum;
}

sumPrimes(977); */

// trying to use hoisted function (in progress)

function sumPrimes(num) {
  let sum = 0;
  
  for (let i = 2; i <= num; i += 1) {

  if (isPrime(i)){sum = sum + i}

  }
  console.log(sum);
  return sum;

}

  function isPrime(x) {
    for (let j = 2; j < x; j += 1) {
      if (x % j === 0) {return false;}
      else return true;
  }
  
  
  }
  
  sumPrimes(977);