function generateParenthesis(n) {
  function backtrack(list, cur, open, close, max) {
    // console.log(cur);
    if (cur.length === max * 2) {
      return list.push(cur);
    }
    if (open < max) { backtrack(list, `${cur}(`, open + 1, close, max); }
    if (close < open) { backtrack(list, `${cur})`, open, close + 1, max); }
    return null;
  }
  const result = [];
  backtrack(result, '', 0, 0, n);
  return result;
}

generateParenthesis(3);

module.exports = { generateParenthesis };
