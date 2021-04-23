function smallestCommons(arr) {
    // Sort arr
    arr.sort((a,b) => a - b);
    // Greatest common divisor
      function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }
    // Lowest common multiple
    function lcm(a, b) {
        return (a * b) / gcd(a, b);   
    }
    // Splice the full range into the array
    let min = arr[0];
    let max = arr[1];
    for(var i = max - 1; i > min; i--){
      arr.splice(1,0,i);
    }
    // Get the LCM by passing multiple to the helper functions. These then set multiple.
    var multiple = min;
    arr.forEach(function(n) {
      multiple = lcm(multiple, n);
    });
    return multiple; 
  }
  smallestCommons([1,5]);