function longestPalindrome(str) {
  const { length } = str;
  let res = '';
  const dp = Array.from(new Array(length), () => new Array(length).fill(false));

  for (let i = length - 1; i >= 0; i -= 1) {
    for (let j = i; j < length; j += 1) {
      dp[i][j] = str[i] === str[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > res.length) {
        res = str.substring(i, j + 1);
      }
    }
  }
  return res;
}


console.log(longestPalindrome('abcdefgfedrewkalsdhiaw123asdq3'));
