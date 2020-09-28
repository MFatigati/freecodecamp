function palindrome(str) {
  let splitArr = str.split("");
  console.log(splitArr);
  let alphaNumArr = splitArr.filter(x => /[A-Za-z0-9]/.test(x))
  console.log(alphaNumArr);
  
  let capArr = alphaNumArr.map(x => x.toUpperCase());
  let revArr = capArr.slice().reverse();
  console.log(capArr, revArr);

  for (let i = 0; i <capArr.length; i += 1) {
    if (capArr[i] !== revArr[i]) {
      return false;
    }
  }
  
    return true;
}


console.log(
palindrome("eye"), // true
palindrome("0_0 (: /-\ :) 0-0"), // true
palindrome("nope") // false
);