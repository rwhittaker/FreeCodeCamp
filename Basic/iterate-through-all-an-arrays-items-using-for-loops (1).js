function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++){
    // If the i'th index (nested array) of the array does not contain the element
   if (arr[i].indexOf(elem) == -1) {
     // add the ith index of the arr to the new array
     newArr.push(arr[i]);
   } 
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));