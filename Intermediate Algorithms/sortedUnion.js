function uniteUnique(arr) {

    var finalArr = []; 
    var args = arguments;
  
    for (var i = 0; i < args.length; i++){
      for (var j = 0; j < args[i].length; j++){
       if (!finalArr.includes(args[i][j])){
        finalArr.push(args[i][j]);
       }
      }
    }
    return finalArr;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  