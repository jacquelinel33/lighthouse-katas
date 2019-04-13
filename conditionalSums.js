const conditionalSum = function(values, condition) {
  var inputArraylength = values.length;
  var sum = 0;
  if(condition == 'even') {
    for(i = 0; i < inputArraylength; i ++) {
      if(values[i] %2 === 0) {
        sum += values[i];
      }
    }
  } else if(condition == 'odd') {
    for(i = 0; i < inputArraylength; i ++) {
      if(values[i] %2 !== 0) {
        sum += values[i];
      }
    }
  } else {
    sum = 'Invalid condition';// give error message
  }
  return sum;// print out final sum
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));