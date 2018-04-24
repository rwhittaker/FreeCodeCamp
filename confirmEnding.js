
function confirmEnding(str, target) {
  /* This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
  */
  if (target.length > 1) {
    // if the target is a word, check target length from end of string
   return str.substring(str.length - target.length) === target;
  }
  else {
    // otherwise, check if the last letter is the target
    return str.substr(-1) === target;
  } 
}

/* though this could be completed just with substr, the substring method has been included for reference */
confirmEnding("Bastian", "n");
