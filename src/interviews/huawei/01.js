function getLastWordLength(str) {
  const lastWord = str.split(' ')[str.split(' ').length - 1] || str;
  console.log(lastWord.length);
  return lastWord.length;
}

getLastWordLength('ABC D');
