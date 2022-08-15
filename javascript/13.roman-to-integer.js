/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
// @lc code=start
const romanSymbols = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
}
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    let diff = romanSymbols[s[i]] < romanSymbols[s[i + 1]];
    diff ? answer -= romanSymbols[s[i]] : answer += romanSymbols[s[i]];
  }

  return answer;
};
exports.romanToInt = romanToInt;
// @lc code=end

