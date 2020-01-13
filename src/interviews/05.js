function replaceSpace(str) {
  const _str = str.replace(/\s/g, '%20');
  return _str;
}

module.exports = { replaceSpace };
