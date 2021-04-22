function sumAll(arr) {
  var biggest = Math.max(arr[0],arr[1]);
  var smallest = Math.min(arr[0],arr[1]);
  
  var i = biggest - 1;
  
  while(i > smallest){
    arr.push(i);
    i--;
  }
  return arr.reduce(function (accumulater, currentValue) {
    return accumulater + currentValue;
  },0);
}
sumAll([1, 4]);
