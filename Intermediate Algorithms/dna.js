function pairElement(str) {
    var unpaired = str.split('');
    var newArr = [];
  
    function createPair(element){
      switch(element) {
        case 'T':
          return(['T','A'])
          break;
        case 'A':
          return(['A','T'])
          break;
        case 'C':
          return(['C','G'])
          break;
        case 'G':
          return(['G','C'])
          break;
      }
    }
  
    unpaired.forEach(element => newArr.push(createPair(element)));
    console.log(newArr);

    return newArr;
  }
  
  console.log(pairElement("TCAG"));

