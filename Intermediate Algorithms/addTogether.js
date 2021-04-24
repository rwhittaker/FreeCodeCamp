function addTogether() {
  
    var arg1 = arguments[0];
    var arg2 = arguments[1];
  
    // First, check if we have two numbers.
    if(typeof arg1 == 'number' && typeof arg2 == 'number'){
      return arg1 + arg2;
    // Then check if the first is a number, and we only have 1. Send arg to sum function.
    } else if(typeof arg1 == 'number' && arguments.length == 1){
      return sum(arg1);
    // Catch the rest and return undefined
    } else {
      return undefined;
    }
  }
  
  // Take one arg from above, feed it into a function with an unknown arg, check if that's a number. Sum or return undefined. 
  function sum(a){
      return function x(n) {
        if (typeof n != 'number'){
          return undefined;
        } else{
          return a + n;
        }
      }
    }
  addTogether(2,3);