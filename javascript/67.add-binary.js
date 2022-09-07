/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {

    let i = 0;
    let carry = 0;
    let revA = a.split("").reverse();
    let revB = b.split("").reverse();
    let ret = [];
    let sum = 0;

    while (revA[i] || revB[i]) {
        sum = (+revA[i] || 0) + (+revB[i] || 0) + carry;
        ret.push(sum % 2);
        carry = sum >= 2 ? 1 : 0;
        i++;
    }

    if (carry == 1)
        ret.push(1);
    return ret.reverse().join('');

};
exports.addBinary = addBinary;
// @lc code=end

