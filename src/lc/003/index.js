function lengthOfLongestSubstring(s) {
  let finalStr = '';
  let tempStr = '';

  for (let i = 0; i < s.length; i += 1) {
    if (tempStr.indexOf(s[i]) === -1) {
      tempStr = tempStr.concat(s[i]);
    } else {
      const index = tempStr.indexOf(s[i]);
      const str = tempStr.substring(index + 1).concat(s[i]);

      if (str.length > tempStr.length) {
        finalStr = finalStr.length > str.length ? finalStr : str;
        tempStr = str;
      } else if (str.length <= tempStr.length) {
        finalStr = finalStr.length > tempStr.length ? finalStr : tempStr;
        tempStr = str;
      }
    }
  }
  finalStr = finalStr.length > tempStr.length ? finalStr : tempStr;

  return finalStr.length;
}

console.log(lengthOfLongestSubstring('pwwkew'));
