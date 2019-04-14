let talkingCalendar = function(date) {
  var month = date.substring(5,7);
  var day = date.substring(8,10);
  var year = date.substring(0,4);
  if(day.charAt(0) === '0') {
    day = day.substring(1);// delete starting zero
  }
  if(day === '1' || day === '21' || day === '31') {
    day += 'st';// first, twenty-first, thirty-first
  } else if(day === '2' || day === '22') {
    day += 'nd';// second, twenty-second
  } else if(day === '3' || day === '23') {
    day += 'rd';// third, twenty-third
  } else {
    day += 'th';// all other cases
  }
  var monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
  var textmonth = monthNames[Number(month) - 1];
  return textmonth + ' ' + day + ', ' + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));