function myReplace(str, before, after) {
  let newStr = "";
  
  let isCaps = /[A-Z]/.test(before.charAt(0))
  console.log(isCaps);

  if (isCaps === true) {
    let newAfter = after.charAt(0).toUpperCase() + after.slice(1);
    console.log(newAfter)
    let regex = new RegExp(before);
    newStr = str.replace(regex, newAfter)
    }
  
  else {
    let newAfter = after.charAt(0).toLowerCase() + after.slice(1);
    let regex = new RegExp(before);
    newStr = str.replace(regex, newAfter)
  }


  return newStr;
}


console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));