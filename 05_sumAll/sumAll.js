const sumAll = function(min,max) {
    // If negative or non-number, error. 
    if (min*max < 0 || !Number.isInteger(min+max)) return "ERROR";
  
    let sum = 0;
    if (max < min) {[max,min] = [min,max];}
    for (let i = min; i <= max; i++) sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
