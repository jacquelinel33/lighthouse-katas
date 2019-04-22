const makeCase = function(input, style) {
  var length = input.length;
  var numstyles = 1;// assume only one conversion style
  var givenstyles = [];
  var vowels = ['a', 'e', 'i', 'o', 'u'];// list known vowels all in lowercase
  var output = '';// initialize empty output string
  var i;
  if(Array.isArray(style)) {
    numstyles = style.length;// more conversion styles if styles is an array
      for(var styles in style) {
      givenstyles.push(style[styles]);
    }
  } else {
    givenstyles.push(style);// still create an array (of length 1) for single input styles so that below switch statement will work
  }

  //console.log('the numbers of styles is ' + numstyles + ": " + givenstyles);// used for debugging
  for(var iteration = 0; iteration < numstyles; iteration++ ) {
  output = '';// clear output at beginning of each iteration (important for multiple input styles)
  switch(givenstyles[iteration]) {
    case 'camel':
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
    break;
    case 'pascal':
      if(input[0].toLowerCase()) {
        output += input[0].toUpperCase();
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
    break;
    case 'snake':
      for(i = 0; i < length; i++) {
        if(input[i - 1] === ' ') {// if precedding char is a space…
          output = output.slice(0, -1);// remove said space
          output += '_';// add underscore
          output += input[i];// add next letter
        } else {
        output += input[i];// otherwise just and next letter
        }
      }
    break;
    case 'kebab':
      for(i = 0; i < length; i++) {
        if(input[i - 1] === ' ') {// if precedding char is a space…
          output = output.slice(0, -1);// remove said space
          output += '-';// add dash
          output += input[i];// add next letter as lowercase
        } else {
        output += input[i];// otherwise just and next letter
        }
      }
    break;
    case 'title':
      if(input[0].toLowerCase()) {
        output += input[0].toUpperCase();
      } else {
        output += input[0];
      }
      for(i = 1; i < length; i++) {
        if(input[i - 1] === ' ') {// if precedding char is a space…
          output += input[i].toUpperCase();// add next letter as capital
        } else {
        output += input[i];// otherwise just and next letter
        }
      }
    break;
    case 'vowel':
      for(i = 0; i < length; i++) {
        if(vowels.indexOf(input[i].toLowerCase()) >= 0) {
          output += input[i].toUpperCase();// change vowels to uppercase
        } else {
          output += input[i];
        }
      }
    break;
    case 'consonant':
      for(i = 0; i < length; i++) {
        if(vowels.indexOf(input[i].toLowerCase()) < 0) {
          output += input[i].toUpperCase();// change non-vowels to uppercase
        } else {
          output += input[i];
        }
      }
    break;
    case 'upper':
      for(i = 0; i < length; i++) {
        output += input[i].toUpperCase();// change all letters to capitals
      }
    break;
    case 'lower':
      for(i = 0; i < length; i++) {
        output += input[i].toLowerCase();// change all letters to lowercase
      }
    break;
    default:
      output = 'Default case getting executed';// not sure that this will ever get executed
  }
  input = output;// old output = new input, important for multiple iterations
}
  console.log(output);// print output since it's missing below
  return output;
};
makeCase("this is a string", "camel");
makeCase("this is a string", "pascal");
makeCase("this is a string", "snake");
makeCase("this is a string", "kebab");
makeCase("this is a string", "title");
makeCase("this is a string", "vowel");
makeCase("this is a string", "consonant");
makeCase("this is a string", ["upper", "snake"]);