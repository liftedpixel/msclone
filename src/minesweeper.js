/*
const blankLine = '   |   |   ';
const guessLine = ' 1 |   |   ';
const bombLine  = '   | B |   '

console.log('This is what an empty board would look like:');
console.log(blankLine);
console.log(blankLine);
console.log(blankLine);

console.log('This is what a board with a guess and a bomb would look like:');
console.log(guessLine);
console.log(bombLine);
console.log(blankLine);
*/

/*
const printBoard = (board) => {
  console.log('Current Board:');
  for (let q=0;q<=2;q++){
    console.log(board[q].join(' | '));
  }
};

const board = [
  [' ',' ',' '],
  [' ',' ',' '],
  [' ',' ',' ']
];

printBoard(board);

board[0][1] = 1;
board[2][2] = 'B';

printBoard(board);
*/


const generatePlayerBoard = (numberOfRows, numberofColumns) => {
  let board = [];
  for (let rows=0; rows<numberOfRows; rows++){
    let row = [];
    for (let cols=0; cols<numberofColumns; cols++){
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let rows=0; rows<numberOfRows; rows++){
    let row = [];
    for (let cols=0; cols<numberOfColumns; cols++){
      row.push(null);
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random()*numberOfRows);
    let randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    // We'll be making sure this doesn't double up on a bomb later
    numberOfBombsPlaced++;
  }
  console.log(board);
  return board;
};

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board:');
printBoard(playerBoard);
console.log('Bomb Board:');
printBoard(bombBoard);
