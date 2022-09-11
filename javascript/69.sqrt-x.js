/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
const STOPDIFF = 0.01;
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x == 0) return 0;
    let x0 = x;
    let diff = 0.1

    while (diff > STOPDIFF) {
        x1 = x0 - (x0 * x0 - x) / (2 * x0);
        diff = Math.abs(x1 - x0);

        x0 = x1;
    }
    return Math.floor(x0);
};
exports.mySqrt = mySqrt;
// @lc code=end

