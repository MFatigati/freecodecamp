function truthCheck(collection, pre) {

if (!collection.every(x => x.hasOwnProperty(pre))) {return false} //technically not necessary
else if (!collection.every(x => x[pre])) {return false}
else {return true}


}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")