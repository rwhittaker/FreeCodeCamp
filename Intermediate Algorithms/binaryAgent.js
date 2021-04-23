function binaryAgent(str) {
    // Convert to an array
    var arr = str.split(/\s/);
    var newArr = [];
    var ascii = [];
  
    // Convert each byte into an integer
    for (var i = 0; i < arr.length; i++){
      newArr.push(parseInt(arr[i],2))
    }
  
    // Converts the decimal to an ASCII character.
    for (var i = 0; i < newArr.length; i++){
      ascii.push(String.fromCharCode(newArr[i]))
    }
  
    return ascii.join('');
  }
  
 console.log(binaryAgent("10101010"));