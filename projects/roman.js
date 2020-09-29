function convertToRoman(num) {
let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let romanNumeral = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I"
];

let romanized = "";

for (let i = 0; i < decimalValue.length; i += 1) {
  if (num >= decimalValue[i]) {
    let count = Math.floor(num/decimalValue[i]);
    let reduceBy = count;
    while (count > 0) {
      romanized += romanNumeral[i];
      count = count - 1;
    }
  num -= (decimalValue[i] * reduceBy);
  console.log(num);
  }

}





  
  
  
  return romanized;
 }




console.log(
convertToRoman(36),
convertToRoman(3999));