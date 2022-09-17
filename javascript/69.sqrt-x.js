/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let left = 1;
    let mid = 0;
    let right = Math.floor(x / 2) + 1;
    let mid2 = 0;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        mid2 = mid * mid;
        if (mid2 > x) {
            right = mid - 1;
        } else if (mid2 < x) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return right;
};
exports.mySqrt = mySqrt;
// @lc code=end

