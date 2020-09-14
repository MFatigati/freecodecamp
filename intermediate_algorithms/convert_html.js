function convertHTML(str) {
  let splitArr = str.split("");
  console.log(splitArr);

let convertedArr = splitArr.map(function(x) {
  switch (x) {
    case '"':
      return "&quot;";
    case '&':
      return '&amp;';
    case "'":
      return '&apos;';
    case '<':
      return '&lt;';
    case '>':
      return '&gt;';
    default:
      return x;
  }
})
console.log(convertedArr);
let newStr = convertedArr.join("");
console.log(newStr);
return newStr;

}

convertHTML("Dolce & Gabbana");
