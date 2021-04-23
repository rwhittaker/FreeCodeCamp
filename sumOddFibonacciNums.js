// TODO: Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
    // TODO: Create fibonacci array
    var arr = [1];
    var fib = 1;
    var i = 0;
  
    while (fib <= num) {
      arr.push(fib);
      fib += arr[i];
      i++;
    }
  
    // TODO: Filter the odds. Sum the Odds.
    var odds = arr.filter(element => element % 2 == 1)
    var sum = odds.reduce((accumulator, currentValue) => accumulator + currentValue,0)
  
    // TODO: Return the result.
    return sum;
  }
  
  sumFibs(1000);