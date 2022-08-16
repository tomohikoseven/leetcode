/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

  let prefixMatchFlg = true; // すべての文字列の接頭語が同じ.

  const strslength = strs.map(x => x.length);
  // 比較すればよい最大の文字数.
  const strsMaxLength = Math.max(...strslength);

  let ans = strs[0].substring(0, strsMaxLength);
  for (let i = strsMaxLength; i >= 0; i--) {
    ans = strs[0].substring(0, i);
    if (!ans) {
      break;
    }
    prefixMatchFlg = true;
    for (let j = 1; j < strs.length; j++) {
      if (ans != strs[j].substring(0, i)) {
        prefixMatchFlg = false;
        break;
      }
    }
    if (prefixMatchFlg) {
      break;
    }
  }
  return ans;

};
exports.longestCommonPrefix = longestCommonPrefix;
// @lc code=end

