class TicTacToe {
  constructor() {
    this.isNext = true;
    this.matrix = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  getCurrentPlayerSymbol() {
    return this.isNext ? "x" : "o";
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex] === null) {
      this.matrix[rowIndex][columnIndex] = this.isNext ? "x" : "o";
      this.isNext = !this.isNext;
    }
  }

  checkWinner(matrix) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const flattenedMatrix = matrix.flat();

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        flattenedMatrix[a] &&
        flattenedMatrix[a] === flattenedMatrix[b] &&
        flattenedMatrix[a] === flattenedMatrix[c]
      ) {
        return flattenedMatrix[a];
      }
    }
    return null;
  }

  isFinished() {
    if (
      (!this.getWinner(this.matrix) && this.noMoreTurns()) ||
      this.getWinner(this.matrix)
    ) {
      return true;
    }
    return false;
  }

  getWinner() {
    return this.checkWinner(this.matrix);
  }

  noMoreTurns() {
    return this.matrix.filter((item) => item.includes(null)).length === 0;
  }

  isDraw() {
    if (this.getWinner(this.matrix) || !this.isFinished(this.matrix)) {
      return false;
    }
    return true;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex] || null;
  }
}

module.exports = TicTacToe;
