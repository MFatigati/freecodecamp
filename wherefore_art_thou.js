// Wherefore art thou
// SOLUTION THAT WORKS WITH FOR LOOPS

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line

  let sourceKeys = Object.keys(source);
  
  for (let i = 0; i < collection.length; i += 1) {
      let matchingNumber = 0;
    for (let j = 0; j < sourceKeys.length; j += 1) {
      if (collection[i][sourceKeys[j]] === source[sourceKeys[j]]) {
      matchingNumber += 1;
      if (matchingNumber === sourceKeys.length) {
        arr.push(collection[i])  
      }     
    }
  }}
    
  // Only change code above this line
  

return arr;
}

console.log(whatIsInAName(
[{ first: "Romeo", last: "Montague" },
{ first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }],

{ last: "Capulet" }),

whatIsInAName([{ "apple": 1, "bat": 2 },
 { "apple": 1 },
  { "apple": 1, "bat": 2, "cookie": 2 },
   { "bat":2 }],
{ "apple": 1, "bat": 2 })
);

/* I need to check whether every element in collection contains any of the same keys
as in source, and whether those same keys have the same values. */

/* Wherefore art thou
// WORKING SOLUTION WITH FILTER BELOW

function whatIsInAName(collection, source) {
  let arr = [];
  // Only change code below this line

  let sourceKeys = Object.keys(source);

  arr = collection.filter(function(obj) {
    for (let i = 0; i < sourceKeys.length; i += 1) {
      if (!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false
      }
    }
    return true;
  })

return arr;
  // Only change code above this line
}

console.log(whatIsInAName(
[{ first: "Romeo", last: "Montague" },
{ first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }],

{ last: "Capulet" }),

whatIsInAName([{ "apple": 1, "bat": 2 },
 { "apple": 1 },
  { "apple": 1, "bat": 2, "cookie": 2 },
   { "bat":2 }],
{ "apple": 1, "bat": 2 })
); */