function truthCheck(collection, pre) {

    // If all values are true, return true, else return false
    for(var i = 0; i < collection.length; i++){
      if (!!collection[i][pre]){
        continue;
      } else {
        return false;
      }
    }
    return true;
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");