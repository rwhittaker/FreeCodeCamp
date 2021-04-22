function fearNotLetter(str) {
  // a = 97, z = 122
  var newArr = [];

  // Create an array with the Ascii values to manipulate
  for (var v of str){
    newArr.push(v.charCodeAt());
  }
  // Find the index of the value after the missing value
  for (var i = 0; i < newArr.length; i++){
    let diff = newArr[i+1] - newArr[i];
    console.log(diff);
    if (diff == 2) {
    // Return the char that is in the gap
      return String.fromCharCode(newArr[i+1] - 1);
    } 
  }
}

console.log(fearNotLetter("abcd"));