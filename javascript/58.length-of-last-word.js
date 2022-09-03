/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const sp = s.split(" ");
  for (let i = sp.length - 1; i >= 0; i--) {
    if (sp[i].length !== 0) {
      return sp[i].length;
    }
  }
};
// @lc code=end

