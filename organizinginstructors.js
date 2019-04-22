const organizeInstructors = function(instructors) {
  var output = {};// empty return object
  var coursenames = [];// empty coursenames array
  for(var key = 0; key < instructors.length; key++) {
  var course = instructors[course];
  if(coursenames.indexOf(instructors[key].course) === -1) {
  coursenames.push(instructors[key].course);
  }
  }// makes list of unique courses
  //console.log('these are the courses: ' + coursenames);
  coursenames.forEach(function(course){
    output[course] = [];// e.g. { iOS: [] }
    for(var i = 0; i < instructors.length; i++) {
      if(instructors[i].course === course) {
      output[course].push(instructors[i].name);
      }
    }
  });
  return output;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));