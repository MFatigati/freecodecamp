function translatePigLatin(str) {
  console.log(str[0]);
  let newStr = "";
  
  if (/[aeiou]/.test(str[0])) {
    newStr = str + "way";}

  else {
    let initialCons = str.match(/[^aeiou]+/g)[0]
    console.log(initialCons)
    newStr = str.slice(initialCons.length) + initialCons + "ay"

  }
  
  return newStr;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("glove"));
