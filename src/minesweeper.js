class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('GAME OVER');
      console.log(this._board.printBoard(this._board._playerBoard));
    } else if (this._board.hasSafeTiles()) {
      console.log('YOU WIN');
      console.log(this._board.printBoard(this._board._playerBoard));
    } else {
      console.log('PLAYER BOARD');
      console.log(this._board.printBoard(this._board._playerBoard));
    }
  }
}


class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard() {return this._playerBoard;}

  flipTile(rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== ' '){
      console.log('CHECK ANOTHER TILE');
      return;
    }
    else if (this._bombBoard[rowIndex][columnIndex] === 'B'){
      this._playerBoard[rowIndex][columnIndex] = 'B';
    }
    else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    }
    this._numberOfTiles--;
  }

  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    const neighborOffsets = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
      let neighborRowIndex = rowIndex + offset[0];
      let neighborColumnIndex = columnIndex + offset[1];
       if (numberOfRows >= neighborRowIndex && neighborRowIndex >= 0 && numberOfColumns >= neighborColumnIndex && neighborColumnIndex >= 0) {
         if (this._bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
           numberOfBombs++;
         }
       }
    });
    return numberOfBombs;
  }

  hasSafeTiles() {
    if (this._numberOfTiles === this._numberOfBombs) {
      return true;
    }
  }

  printBoard(board) {
    console.log(board.map(row => row.join(' | ')).join('\n'));
  }

  static generatePlayerBoard(numberOfRows, numberofColumns) {
    let board = [];
    for (let rows=0; rows<numberOfRows; rows++){
      let row = [];
      for (let cols=0; cols<numberofColumns; cols++){
        row.push(' ');
      }
      board.push(row);
    }
    return board;
  }

  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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
      if (board[randomRowIndex][randomColumnIndex] != 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
      }
    }
    return board;
  }
}

const g = new Game(3,3,3);
g.playMove(1,2);
g.playMove(1,1);
g.playMove(0,0);
g.playMove(1,1);
