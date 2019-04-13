const instructorWithLongestName = function(instructors) {
  var numInstructors = instructors.length;// find out how many instructors are in the object
  //console.log('There are ' + numInstructors + ' instructors in this array.');
  var longestInstructorIndex = 0;// assume first instructor has longest name until we know better
  var longestInstructorLength = instructors[longestInstructorIndex].name.length;// find character length of first instructor name
  for(i = 1; i < numInstructors; i++) {// note start at 1 to skip comparison to known first instructor
    if(instructors[i].name.length > longestInstructorLength) {
      longestInstructorIndex = i;// update index to reflect new longest instructor
      longestInstructorLength = instructors[i].name.length;// update longest instructor length
    }
  }
  return instructors[longestInstructorIndex];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));