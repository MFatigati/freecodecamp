function fearNotLetter(str) {
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let strFirstLetterPosition = ""
for (let i = 0; i < alphabet.length; i += 1) {
  if (alphabet[i] === str[0]) {
    strFirstLetterPosition = i;
  }
}

let alphabetChunk = alphabet.slice(strFirstLetterPosition);
console.log(alphabetChunk);

for (let i = 0; i < str.length; i += 1) {
  if (str[i] !== alphabetChunk[i]) {return alphabetChunk[i]
} 
}
return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stvwx"));