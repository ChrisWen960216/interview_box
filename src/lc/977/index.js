const colors = require('colors');

function reducerHandle(accumulator, current) {
  accumulator.push(current * current);
  return accumulator;
}

function sortedSquares(A) {
  return A.reduce(reducerHandle, []).sort((a, b) => (a - b));
}


const testCase = [-4, -1, 0, 3, 10];
console.log(colors.green(sortedSquares(testCase)));
