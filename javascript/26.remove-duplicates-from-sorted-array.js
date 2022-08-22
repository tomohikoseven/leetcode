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
  let numsSet = new Set(nums);
  nums = [...numsSet];

  return numsSet.size;
};
exports.removeDuplicates = removeDuplicates;
// @lc code=end

