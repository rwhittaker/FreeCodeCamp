function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = 2 * Math.PI;
    var newArr = [];
  
    function getOrbPeriod(obj){
      var c = Math.pow(earthRadius + obj.avgAlt, 3)
      var b = Math.sqrt(c / GM);
      var orbPeriod = Math.round(a * b);
      return {name : obj.name, orbitalPeriod: orbPeriod}
    }
    
    for (var elem in arr){
      newArr.push(getOrbPeriod(arr[elem]))
    }
    console.log(newArr);
    return newArr;
  
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);