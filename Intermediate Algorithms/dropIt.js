function dropElements(arr, func) {
    // Array length will change as shift() happens.
    var originalLength = arr.length
    for(var i = 0; i < originalLength; i++){
      // Only ever checking the first char of the array.
      if(func(arr[0])){
        break
      } else {
        arr.shift()
      }
    }
    return arr;
  }
  
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));