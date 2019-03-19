const colors = require('colors');

function sortedSquares(A) {
  let breakPoint = 0;
  const resultArray = [];

  while (A[breakPoint] < 0) {
    breakPoint += 1;
  }

  let i = breakPoint;
  let j = breakPoint - 1;

  while (j >= 0 && i <= A.length) {
    const iSq = A[i] * A[i];
    const jSq = A[j] * A[j];
    if (iSq <= jSq) {
      resultArray.push(iSq);
      i += 1;
    } else {
      resultArray.push(jSq);
      j -= 1;
    }
  }

  while (i < A.length) {
    resultArray.push(A[i] * A[i]);
    i += 1;
  }

  while (j > 0) {
    resultArray.push(A[j] * A[j]);
    j -= 1;
  }

  return resultArray;
}

const testCase = [-4, -1, 0, 3, 10];
console.log(colors.green(sortedSquares(testCase)));
