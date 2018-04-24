function findLongestWord(str) {
  var str = str.split(' ');
  var longest = 0;
  
  for (var word = 0; word < str.length; word++) {
    if (longest < str[word].length){
      longest = str[word].length;
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
