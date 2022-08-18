/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const parentheses = '\\(\\)';
  const brackets = '\\[\\]';
  const braces = '\\{\\}';

  const pattern = parentheses + '|' +
    brackets + '|' +
    braces;
  const re = new RegExp(pattern);

  while (re.test(s)) {
    s = s.split("()").join('');
    s = s.split("[]").join('');
    s = s.split("{}").join('');
  }

  return s.length == 0;
};
exports.isValid = isValid;
// @lc code=end

