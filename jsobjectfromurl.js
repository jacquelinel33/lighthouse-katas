const urlDecode = function(text) {
  var output = {};// initialize empty return object
  var i = 0;
  var firsttermkey = '';
  var firsttermvalue = '';
  var secondtermkey = '';
  var secondtermvalue = '';
  while(text[i] !== '=') {
    firsttermkey += text[i];
    i++;
  }// gets first key
  text = text.substr(i);// delete first key from existing string input
  i = 0;// reset i to 0
  while(i < text.length) {
    if(text[i] === '&') { break; }// exit loop if we have a second key/value pair
    firsttermvalue += text[i];
    i++;
  }
  firsttermvalue = firsttermvalue.substr(1);// deletes '=' in front of value
  text = text.substr(i);// delete first key value from existing string input

  for(i = 0; i < firsttermvalue.length; i++) {// change '%20' into ' ' for first term value
    if(firsttermvalue[i] === '%' && firsttermvalue[i + 1] === '2' && firsttermvalue[i + 2] === '0') {
      firsttermvalue = firsttermvalue.replace('%20', ' ');// do the swap
    }
  }
  output[firsttermkey] = firsttermvalue;// add to output
  //console.log(text);
  i = 0;
  if(text[0] === '&') {// now do this for two key-value input strings
    text = text.substr(1);// deletes '&' in front of key
    while(text[i] !== '=') {
      secondtermkey += text[i];
      i++;
    }// gets second key
    secondtermvalue = text.substr(i);// delete secondtermkey from text string
    secondtermvalue = secondtermvalue.substr(1);// delete '=' in front of value
    for(i = 0; i < secondtermvalue.length; i++) {// change '%20' into ' ' for first term value
      if(secondtermvalue[i] === '%' && secondtermvalue[i + 1] === '2' && secondtermvalue[i + 2] === '0') {
        secondtermvalue = secondtermvalue.replace('%20', ' ');// do the swap
      }
    }
    output[secondtermkey] = secondtermvalue;// add to output
  }
  return output;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);