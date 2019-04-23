const squareCode = function(message) {
  var message = message.replace(/\s/g, '');// remove all spaces in message
  var columns = Math.ceil(Math.sqrt(message.length));
  var rows = Math.ceil(message.length / columns);
  var finalrow = columns;
  if(message.length % columns > 0) {
    finalrow = message.length % columns;//if final row is not full
  }
  var output = '';
  //console.log(message + " " + rows + " rows " + columns + " columns and " + finalrow + " chars in the final row");
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