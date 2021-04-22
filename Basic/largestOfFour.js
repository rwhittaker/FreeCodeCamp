
function largestOfFour(arr) {
  
  var newArray = [];
  
  for (var subs = 0; subs < arr.length; subs++) {
    var largest = 0;
    for (var nums = 0; nums < arr[subs].length; nums++) {
      if (largest < arr[subs][nums]) {
        largest = arr[subs][nums];
      }
    }
    newArray.push(largest);
  }
  return newArray;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
