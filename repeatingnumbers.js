let repeatNumbers = function(data) {
  var output = '';
  var numsubarrays = data.length;
  for(i = 0; i < numsubarrays; i++) {
    var valuetorepeat = data[i][0];
    var repeattimes = data[i][1];
    for(j = 0; j < repeattimes; j++) {
      output += valuetorepeat;// repeat 'i' 'j' times
    }
    if(numsubarrays > 1 && i < numsubarrays - 1) {
      output += ', ';// add ', ' for sub arrays, excluding final one
    }
  }
  return output;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));