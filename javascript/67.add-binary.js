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

    while (revA[i] || revB[i]) {
        const intA = revA[i] ? parseInt(revA[i]) : 0;
        const intB = revB[i] ? parseInt(revB[i]) : 0;
        ret.push((intA + intB + carry) % 2);
        carry = (intA + intB + carry) >= 2 ? 1 : 0;
        i++;
    }

    if (carry == 1)
        ret.push(1);
    return ret.reverse().join('');

};
exports.addBinary = addBinary;
// @lc code=end

