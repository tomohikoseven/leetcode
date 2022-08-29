/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let matchFlg = false;
  let idx = 0;
  if (!needle) return 0;
  if (haystack.length < needle.length) return -1;

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      } else {
        if (j == needle.length - 1) {
          matchFlg = true;
        }
      }
    }
    if (matchFlg) {
      idx = i;
      break;
    }
  }
  return matchFlg ? idx : -1;
};
exports.strStr = strStr;
// @lc code=end

