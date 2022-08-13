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
  let input = x.toString(10);
  let reverse = input.split("").reverse().join("");

  return input == reverse;
};
exports.isPalindrome = isPalindrome;
// @lc code=end

