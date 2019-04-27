const blocksAway = function(directions) {
  var position = {east: 0, north: 0};
  var cardinaldir;
  var i;

  if(directions[0] === 'right') {
    position.east += directions[1];
    cardinaldir = 'east';
  } else if(directions[0] === 'left') {
    position.north += directions[1];
    cardinaldir = 'north';
  }
  // console.log('You are now facing: ' + cardinaldir + ' Current position is east: ' + position.east + ', north: ' + position.north);// establish initial direction
  for(i = 2; i < directions.length; i += 2) {
    if(directions[i] === 'right') {// first find new cardinal direction
      if(cardinaldir === 'north') {
        cardinaldir = 'east';
      } else if(cardinaldir === 'east') {
        cardinaldir = 'south';
      } else if(cardinaldir === 'south') {
        cardinaldir = 'west';
      } else if(cardinaldir === 'west') {
        cardinaldir = 'north';
      }
    } else if(directions[i] === 'left') {
      if(cardinaldir === 'north') {
        cardinaldir = 'west';
      } else if(cardinaldir === 'east') {
        cardinaldir = 'north';
      } else if(cardinaldir === 'south') {
        cardinaldir = 'east';
      } else if(cardinaldir === 'west') {
        cardinaldir = 'south';
      }
    }
      if(cardinaldir === 'north') {// now adjust position accordingly
        position.north += directions[i + 1];
        // console.log('You are now facing: ' + cardinaldir + ' Current position is east: ' + position.east + ', north:' + position.north);// establish initial direction
      } else if(cardinaldir === 'east') {
        position.east += directions[i + 1];
        // console.log('You are now facing: ' + cardinaldir + ' Current position is east: ' + position.east + ', north:' + position.north);// establish initial direction
      } else if(cardinaldir === 'south') {
        position.north -= directions[i + 1];
        // console.log('You are now facing: ' + cardinaldir + ' Current position is east: ' + position.east + ', north:' + position.north);// establish initial direction
      } else if(cardinaldir === 'west') {
        position.east -= directions[i + 1];
        // console.log('You are now facing: ' + cardinaldir + ' Current position is east: ' + position.east + ', north:' + position.north);// establish initial direction
      }
  }
  // console.log('the length of input array is: ' + directions.length);
  return position;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));