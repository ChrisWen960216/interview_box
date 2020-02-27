function Find(target, array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].indexOf(target) > -1) { return true; }
    if (array[array.length - 1] > target) { return false; }
  }
  return false;
}

module.exports = { Find };
