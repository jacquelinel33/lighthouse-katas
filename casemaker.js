let camelCase = function(input) {
  var length = input.length;
  var output = '';
  if(input[0].toLowerCase()) {
    output += input[0].toLowerCase();
  } else {
    output += input[0];
  }
  for(i = 1; i < length; i++) {
    if(input[i - 1] === ' ') {// if precedding char is a space…
      output = output.slice(0, -1);// remove said space
      output += input[i].toUpperCase();// add next letter as capital
    } else {
    output += input[i];// otherwise just and next letter
    }
  }
  return output;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));