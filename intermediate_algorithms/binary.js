function binaryAgent(str) {
let arr = str.split(" ");
console.log(arr);

let newArr = arr.map(x => String.fromCharCode(parseInt(x, 2)));
  /* first, each element of the array is converted using parseInt() from
  binary to base 10. You need to specify that the original string is in
  base 2, and then parseInt automatically converts to base 10. Then, the
  result of that is analyzed by fromCharCode as a UTF-16 number to see
  what character it represents.
    */
console.log(newArr);

newStr = newArr.join("");

  return newStr;
}

console.log(
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// note that the first below won't work, because the binary is not a string

console.log(parseInt(00111111, 2))
console.log(parseInt("00111111", 2))