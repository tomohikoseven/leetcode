/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let xAry = x.toString().split("");

  while (xAry.length > 1) {
    if (xAry.shift() != xAry.pop()) {
      return false;
    }
  }
  return true;
};
exports.isPalindrome = isPalindrome;
// @lc code=end

