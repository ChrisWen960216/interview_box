function getCharCount(str, char) {
  const _str = str.toLowerCase();
  const _char = char.toLowerCase();
  let count = 0;
  for (let i = 0; i < _str.length; i += 1) {
    if (_str[i] === _char) {
      count += 1;
    }
  }
  return count;
}

const str = 'ABCD';
const char = 'a';

console.log(getCharCount(str, char));
