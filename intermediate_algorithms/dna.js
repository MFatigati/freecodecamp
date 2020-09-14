/* function pairElement(str) {
let newArr = []
for (let i = 0; i < str.length; i += 1) {
  switch(str[i]) {
    case "A":
      newArr.push(["A", "T"]);
      break;
    case "T":
      newArr.push(["T", "A"]);
      break;
    case "C":
      newArr.push(["C", "G"]);
      break;
    case "G":
      newArr.push(["G", "C"]);
      break;
  }
}


  return newArr;
}

console.log(pairElement("GCG")); */

// Alt solution based on one of the hints

function pairElement(str) {
  let individualArray = str.split("");
  console.log(individualArray);

  let pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  }

  let newArr = individualArray.map(x => [x, pairs[x]]);
  
    return newArr;
  }

  console.log(pairElement("GCG"));