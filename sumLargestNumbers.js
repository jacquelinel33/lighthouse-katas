let sumLargestNumbers = function(data) {
  var inputarraylength = data.length;
  if(inputarraylength < 2) {
    return "Not enough numbers in array.";// return message if input array contains less than 2 elements
  } else {
    data.sort(function(a, b){return b-a});// sort numbers in descending order
    return data[0] + data[1];// adds two largest numbers
  }
};

console.log(sumLargestNumbers([1]));
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));