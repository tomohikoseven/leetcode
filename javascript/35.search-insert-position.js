/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

  if (nums.length == 0) return 0;
  if (nums[nums.length - 1] < target) return nums.length;
  if (nums[0] >= target) return 0;

  let left = 1;
  let right = nums.length - 1;
  let mid = Math.round((right + left) / 2);
  while (left <= right) {
    if (nums[mid] == target) return mid;
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.round((right + left) / 2);
  }

  return mid;

};
exports.searchInsert = searchInsert;
// @lc code=end

