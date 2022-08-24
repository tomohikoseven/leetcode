/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // ポイント:関数実行後、引数numsを検証する.
  //        : 戻り値の数値より大きいnumsのインデックス要素は
  //          あってもなくてもよい。
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[idx] = nums[i];
      idx++;
    }
  }
  return idx;
};
exports.removeElement = removeElement;
// @lc code=end

