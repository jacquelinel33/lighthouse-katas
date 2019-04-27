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
}
const queenThreat = function(gameboard) {

  return false;
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [7, 5];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard)
console.log(queenThreat(generatedBoard));