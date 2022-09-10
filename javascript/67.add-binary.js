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
    let j = 0;
    const aLen = a.length;
    const bLen = b.length;
    let carry = 0;
    let revA = a.split("").reverse();
    let revB = b.split("").reverse();
    let ret = [];
    let sum = 0;

    while (i < aLen || j < bLen) {
        sum = (+revA[i] || 0) + (+revB[j] || 0) + carry;
        ret.push(sum % 2);
        carry = sum >= 2 ? 1 : 0;
        i++;
        j++;
    }

    if (carry == 1)
        ret.push(1);
    return ret.reverse().join('');

};
exports.addBinary = addBinary;
// @lc code=end

