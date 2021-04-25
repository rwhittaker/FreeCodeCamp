function palindrome(str) {
    var forwards = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split('');
    var backwards = [];
  
    for(var i = forwards.length - 1; i >= 0; i--){
      backwards.push(forwards[i]);
    }
  
    if (forwards.length != backwards.length){
      return false
    } else {
      for(var i = 0; i < forwards.length; i++) {
        if(forwards[i] === backwards[i]){
          continue;
        } else {
          return false;
        }
      }
    }
    return true;
  }
  
  console.log(palindrome("almostomla"));