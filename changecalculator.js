let calculateChange = function(total, cash) {
  var output = {};// empty return array
  var denominations = {
    'twenty': 2000,
    'ten': 1000,
    'five': 500,
    'twoDollar': 200,
    'dollar': 100,
    'quarter': 25,
    'dime': 10,
    'nickel': 5,
    'penny': 1,
  };
  var delta = cash - total;
  var runningtotal = delta;// initialize running total; to be reduced
  console.log('The difference is ' + delta + '.');

  for (var key in denominations) {
  var currentdenom = denominations[key];// 2000, 1000 etc; numerical value
  var outputdenom = key;// string of denomination text

    if(runningtotal - currentdenom > 0) {// can we give at least one item of this denomination back?
      runningtotal -= currentdenom;// deduct this from the running total
      output[outputdenom] = 1;// add it to the output
      //console.log(runningtotal);
      while(currentdenom <= runningtotal) {
        output[outputdenom] += 1;// add any additional units of this denomination
        runningtotal -= currentdenom;// and again deduct these from the running total
        //console.log(runningtotal);
      }
    }
  }
  return output;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

//console.log(calculateChange(1787, 10000));