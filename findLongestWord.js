function findLongestWord(str) {
  var longest = 0; 
  var split = str.split(' ');

  for (var i = 0; i < split.length; i++)
    if (longest < split[i].length)
      longest = split[i].length;
  
  return longest;
  
}

findLongestWord("The quick brown fox jumped over the lazy dog");
