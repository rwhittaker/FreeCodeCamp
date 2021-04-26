function rot13(str) {
    var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var arr = str.split('');
    var reg = new RegExp(/^[A-Z]/i);
    var rot = 13;
  
    //iterate over array
    var current;
    for(var i = 0; i < arr.length; i++) {
      // check if element is a letter
      if(reg.test(arr[i])){
        // if it is, and the result is not more than 25, replace it with a letter 13 letters on
        if(alphabet.indexOf(arr[i]) + rot <= 25){
          // set current to be the current letter's index + 13
          current = alphabet.indexOf(arr[i]) + rot;
          // replace i'th char with decoded text.
          arr[i] = alphabet[current];
          // wraparound case... 
        } else {
          current = alphabet.indexOf(arr[i]) + rot;
          current -= 26;
          arr[i] = alphabet[current];
        }
        // if element isn't a letter
      } else {
        continue;
      }
    }
    return arr.join('');
  }
  
  rot13("SERR PBQR PNZC");