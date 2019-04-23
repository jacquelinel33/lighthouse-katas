const squareCode = function(message) {
  message = message.replace(/\s/g, '');// remove all spaces in message
  var columns = Math.ceil(Math.sqrt(message.length));
  var i, j;
  var output = '';
  for(i = 0; i < columns; i++) {// iterate for each of the columns
    for(j = i; j < message.length; j += columns) {
      output += message[j];// nested loop adds characters according to row and column size
    }
    if(i < columns - 1) {
      output += ' ';// add space
    }
  }
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));