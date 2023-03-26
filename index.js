const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries;
batteryBatches.reduce(function(acc,elem){
    // console.log(elem + acc);
    totalBatteries = elem + acc;
    return totalBatteries;
})