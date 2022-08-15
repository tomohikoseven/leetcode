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
  let romanAry = s.split("");
  let answer = 0;

  for (let i = 0; i < romanAry.length - 1; i++) {
    if (romanSymbols[romanAry[i]] < romanSymbols[romanAry[i + 1]]) {
      answer -= romanSymbols[romanAry[i]];
    } else {
      answer += romanSymbols[romanAry[i]];
    }
  }
  answer += romanSymbols[romanAry[romanAry.length - 1]];

  return answer;
};
exports.romanToInt = romanToInt;
// @lc code=end

