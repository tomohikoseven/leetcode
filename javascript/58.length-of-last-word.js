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
  const sp = s.split(/(\s+)/).filter(e => e.trim().length > 0);
  return sp[sp.length - 1].length;
};
// @lc code=end

