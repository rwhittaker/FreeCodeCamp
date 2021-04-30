function checkCashRegister(price, cash, cid) {
    var values = { "ONE HUNDRED":100, "TWENTY":20, "TEN":10, "FIVE":5, "ONE":1, "QUARTER":0.25, "DIME":0.10,"NICKEL":0.05, "PENNY":0.01}
    var inDrawer = 0;
    // Total cash on hand in Drawer
    for (var i = 0; i < cid.length; i++){
        inDrawer += cid[i][1];
      }
    cid = [...cid].reverse();
    var change = ((price - cash) * -1);

    function createReceipt(change,cid,values){
      var due = {status: "OPEN", change: []}      
      change = change * 1000
      for (i in cid){
        var arr = []
        var count = 0;
        var currentSlot = cid[i][0]; // Name of the denomination / note e.g. "ONE HUNDRED"
        var originalAmount = cid[i][1] * 1000; // Amount of the denomination available e.g. 100
        var currentValue = values[currentSlot] * 1000 // The value of each unit of the denomination in the slot
        // Loop over denom until change is more than can be subtracted from the currentValue
        
        while (change >= currentValue && count < originalAmount){
          if(count >= 0 && !arr.includes(currentSlot)){ // on second loop, don't add the name of denom again
            arr.push(currentSlot) // Add the denomination name to the array

          }  
          count += currentValue // increment the count by the current value
          change -= currentValue // subtract the value of that note from the change
          cid[i][1] - currentValue // also subtract it from the drawer
        }
        if (count > 0){
        arr.push(count / 1000)
        due.change.push(arr)
        }
      }
      // If we can't make change, return the insufficent funds object via its function
      if (change > 0){
        return insufficientFunds()     
      } 
      return due;
    }
    function insufficientFunds(){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    function closed(){
        return {status: "CLOSED", change:[...cid].reverse()};
    }
    // Main
    if (inDrawer < change){ // Case if there's not enough cash on hand OK
      return insufficientFunds();
    } else if (inDrawer == change){
        return closed();
    } else {     // Process receipt change
        return createReceipt(change,cid,values);
        }
        return due;
  }
 console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
 
