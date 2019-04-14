const multiplicationTable = function(maxValue) {
  var output = '';
  for(i = 1; i <= maxValue; i++) {
    for(j = 1; j <= maxValue; j++) {
      output += i*j;
      if(j <maxValue) {
        output += ' ';// add space after number except final number
      }
    }
    output += '\n';// add newline character
  }
  return output;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));