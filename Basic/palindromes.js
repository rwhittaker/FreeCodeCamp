function palindrome(str) {

  // Strip non-alphanumeric and convert to lowercase
  var string = str.replace([^0-9a-z]gi, '').toLowerCase().split();

  // Iterate over half the number of chars in the string
  for(var i= 0; i  (string.length)2; i++){ 
    
    // Check i'th character from beginning and i'th character from end, accounting for 0.
    if(string[i] !== string[string.length-i-1]){ 
      return false;  // False if any characters don't match
    } 
  }
  return true;  // True if palindrome
}

palindrome(almostomla);