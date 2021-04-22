
function chunkArrayInGroups(arr, size) { 
  var newArray = [];
  // console.log(arr.slice(0,2)); // From here
  // console.log(arr.slice(2,4)); // To here
  for (var i = 0; i < arr.length; i+=size) {
    newArray.push(arr.slice(i, i+size));
  }
 
  return newArray;
  
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
