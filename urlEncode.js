const urlEncode = function(text) {
  var length = text.length;// get string length
  var encoded = '';
  if(text[0] === ' ') {// delete first char if whitespace
    encoded += '';
  } else {
    encoded += text[0];
  }
  for(i = 1; i < length - 1; i++) {
    if(text[i] === ' ') {
      encoded += '%20';// replace *internal* (note loop start/end points) whitespace with '%20'
    } else {
      encoded += text[i];
    }
  }
  if(text[length - 1] === ' ') {// delete last char if whitespace
    encoded += '';
  } else {
    encoded += text[length - 1];
  }
  return encoded;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));