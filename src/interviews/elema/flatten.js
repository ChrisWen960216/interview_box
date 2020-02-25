const a = [1, [5, [8, 3, 3, 7]]];

const hashMap = {};

function flattenArray(array) {
  let result = [];
  array.map((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
      return true;
    }
    return result.push(item);
  });
  return result;
}

function uniconArray(array) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    const current = array[i];
    if (!hashMap[current]) {
      hashMap[current] = 1;
      result.push(current);
    }
  }
  return result;
}

function sortArray(array) {
  return array.sort((x, y) => (x - y));
}

function flatten(array) {
  const _flattenArray = flattenArray(array);
  const _uniconArray = uniconArray(_flattenArray);
  const _sortArray = sortArray(_uniconArray);
  return _sortArray;
}
const _a = flatten(a);
console.log(_a);

// const _a = flatten(a);
// console.log(_a); // 1,2,3,5,7,8
