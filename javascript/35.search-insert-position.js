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
  const left = 0;
  const right = nums.length - 1;
  return binSearch(nums, target, left, right);

};
/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function binSearch(nums, target, left, right) {
  if (left > right) return left;

  const mid = Math.floor((left + right) / 2);
  if (nums[mid] === target) return mid;
  if (target < nums[mid]) {
    return binSearch(nums, target, left, mid - 1);
  }
  else {
    return binSearch(nums, target, mid + 1, right);
  }
}
exports.searchInsert = searchInsert;
// @lc code=end

