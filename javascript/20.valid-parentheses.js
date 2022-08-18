/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
var matchCnt = function (str, match) {
  const re = new RegExp(match, 'g')
  return (str.match(re) || []).length;
}
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  /*
   * 左右のカッコの数が一致していない場合は、不正なカッコである。
  */
  const leftParentheseCnt = matchCnt(s, '\\(');
  const rightParentheseCnt = matchCnt(s, '\\)');
  if (leftParentheseCnt != rightParentheseCnt) return false;

  const leftBracketCnt = matchCnt(s, '\\[');
  const rightBracketCnt = matchCnt(s, '\\]');
  console.log(leftBracketCnt);
  console.log(rightBracketCnt);
  if (leftBracketCnt != rightBracketCnt) return false;

  const leftBraceCnt = matchCnt(s, '\\[');
  const rightBraceCnt = matchCnt(s, '\\]');
  if (leftBraceCnt != rightBraceCnt) return false;

  /*
   * 不正なカッコのパターンが含まれている場合、不正なカッコである。
  */
  const ngPatterns = ["\\(\\]", "\\(\\}", "\\[\\)", "\\[\\}", "\\{\\)", "\\{\\]"];
  for (let i = 0; i < ngPatterns.length; i++) {
    let re = new RegExp(ngPatterns[i]);
    if (re.test(s)) return false;
  }

  return true;
};
exports.isValid = isValid;
exports.matchCnt = matchCnt;
// @lc code=end

