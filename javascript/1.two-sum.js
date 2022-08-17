/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numsIdxMap = {};

  numsIdxMap[nums[0]] = 0;

  for (let i = 1; i < nums.length; i++) {

    if (target - nums[i] in numsIdxMap) {
      return [numsIdxMap[target - nums[i]], i];
    }

    numsIdxMap[nums[i]] = i;
  }

  return null;
};
exports.twoSum = twoSum;
// @lc code=end

