'use strict';

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

var printBoard = function printBoard(board) {
  console.log('Current Board:');
  for (var q = 0; q <= 2; q++) {
    console.log(board[q].join(' | '));
  }
};

var board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

printBoard(board);

board[0][1] = 1;
board[2][2] = 'B';

printBoard(board);