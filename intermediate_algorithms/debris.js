function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

let newArr = [];

arr.forEach(function(x) {

let r = earthRadius + x["avgAlt"];
console.log(r);

let T = 2*Math.PI*Math.sqrt(r**3/GM)
console.log(T);
let TRound = Math.round(T);
console.log(TRound)

newArr.push({
  name: x["name"],
  "orbitalPeriod": TRound
      });
});

return newArr;
}
console.log(orbitalPeriod([
  {name: "iss", avgAlt: 413.6}, 
  {name: "hubble", avgAlt: 556.7}, 
  {name: "moon", avgAlt: 378632.553}]));




// T = 2*pi*sqrt(r^3/GM)