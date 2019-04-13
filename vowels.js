let numberOfVowels = function(data) {
  var length = data.length;
  var numvowels = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for(i = 0; i < length; i++) {
    if(vowels.includes(data[i])){
      numvowels += 1;
    }
  }
  return numvowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));