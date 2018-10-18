const matrix = [
  [-4, -5],
  [-4, -5],
  [-4, -5],
];

function NumMatrix(matrix) {
  this.matrixHashMap = {};

  const rowLength = matrix.length;
  const colLength = matrix[0].length;

  function calResult(row1, col1, row2, col2) {
    let result = 0;
    for (let i = row1; i <= row2; i += 1) {
      for (let j = col1; j <= col2; j += 1) {
        result += matrix[i][j];
      }
    }
    return result;
  }

  for (let row1 = 0; row1 < rowLength; row1 += 1) {
    for (let col1 = 0; col1 < colLength; col1 += 1) {
      for (let row2 = 0; row2 < rowLength; row2 += 1) {
        for (let col2 = 0; col2 < colLength; col2 += 1) {
          this.matrixHashMap[`${row1}-${col1}-${row2}-${col2}`] = calResult(row1, col1, row2, col2);
        }
      }
    }
  }

  console.log(this.matrixHashMap);
}

NumMatrix(matrix);

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {

};
