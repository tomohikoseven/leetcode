/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // ポイント:ソート済みであること.
  //         引数numsが関数実行後に検証されること。
  let numsSet = new Set(nums);
  let cnt = 0;

  for (let val of numsSet) {
    nums[cnt++] = val;
  }

  return cnt;
};
exports.removeDuplicates = removeDuplicates;
// @lc code=end

