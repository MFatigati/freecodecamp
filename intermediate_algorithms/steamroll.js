function steamrollArray(arr) {
let flattened = [];

function arrayCheck(x) {
  if (Array.isArray(x) === false) {
    flattened.push(x);
  }
else {
  for (let i = 0; i < x.length; i++) {
    arrayCheck(x[i])
  }
  }


}


arrayCheck(arr);

return flattened;

}

console.log(steamrollArray([1, [2], [
                                    3, [
                                        [4]
                                        ]
                                    ]
                            ]));
console.log(steamrollArray(
  [
    [["a"]],
    [["b"]]
  ]));