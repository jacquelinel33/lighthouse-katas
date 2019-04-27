const generateBoard = function(whiteQueen, blackQueen) {
  var whiteQueenx = whiteQueen[0];
  var whiteQueeny = whiteQueen[1];
  var blackQueenx = blackQueen[0];
  var blackQueeny = blackQueen[1];
  var output = [];
  var i, j = 0;
  for(i = 0; i < 8; i++) {
    output[i] = [];
    for(j = 0; j < 8; j++) {
      output[i].push(0);
    }
  }// creates 8 x 8 game board
  output[whiteQueeny][whiteQueenx] = 1;// assign white Queen
  output[blackQueeny][blackQueenx] = 1;// assign black Queen
  return output;
};
const queenThreat = function(gameboard) {
  var canAttack = false;
  var i, j;
  var queen1x, queen1y, queen2x, queen2y = 0;// initialize vars
  for(i = 0; i < 8; i++) {
    if(gameboard[i].indexOf(1) >= 0) {
      //console.log(gameboard[i]);
      queen1x = gameboard[i].indexOf(1);
      queen1y = i;
      break;
    }
  }// assign queen1 location
  var arraysum = 0;
  var bothonsamerow = false;
  for(i = 0; i < 8; i++) {
    for(j = 0; j < 8; j++) {
      arraysum += gameboard[i][j];
      if(arraysum === 2) {
        bothonsamerow = true;
      }
    }
    arraysum = 0;
  }
  if(bothonsamerow) {
    queen2y = queen1y;
    for(i = 7; i >=0; i--){
      if(gameboard[queen2y][i] === 1) {
        queen2x = [i];
        break;
      }
    }// determine if both queens are on same row
  } else {
    for(i = 7; i >= 0; i--) {
      if(gameboard[i].indexOf(1) >= 0) {
       //console.log(gameboard[i]);
        queen2x = gameboard[i].indexOf(1);
        queen2y = i;
        break;
      }
    }
  }
  //console.log("(q1x, q1y) = (" + queen1x + ", " + queen1y + ")");
  //console.log("(q2x, q2y) = (" + queen2x + ", " + queen2y + ")");
  // now queens are assigned
  if(queen1x === queen2x || queen1y === queen2y) {
    canAttack = true;// return true if in horizontal or vertical line;
  }
  var queen1diagonals = [];
  for(i = 1; i < 8; i++) {
    if(queen1x + i >= 0 && queen1x + i < 8 && queen1y + i >= 0 && queen1y + i < 8) { queen1diagonals.push([queen1x + i, queen1y + i]); }
    if(queen1x + i >= 0 && queen1x + i < 8 && queen1y - i >= 0 && queen1y - i < 8) { queen1diagonals.push([queen1x + i, queen1y - i]); }
    if(queen1x - i >= 0 && queen1x - i < 8 && queen1y + i >= 0 && queen1y + i < 8) { queen1diagonals.push([queen1x - i, queen1y + i]); }
    if(queen1x - i >= 0 && queen1x - i < 8 && queen1y - i >= 0 && queen1y - i < 8) { queen1diagonals.push([queen1x - i, queen1y - i]); }
  }//list of diagonals for queen1; now let's see if queen2 is inside that array
 // console.log(queen1diagonals);
  var queen2 = [queen2x, queen2y];
  //console.log(queen2);
  for(i = 0; i < queen1diagonals.length; i++) {
    //console.log(queen2 + " mes " + queen1diagonals[i]);
    if(queen2[0] == queen1diagonals[i][0] && queen2[1] == queen1diagonals[i][1] ) {
      canAttack = true;// if x and y coord a match along diagonals
    }
  }
  return canAttack;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [7, 5];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));