/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let answer = 0;
  let cnt = 0;
  while (s.substring(0, 1) == "M") {
    s = s.slice(1);
    answer += 1000;
  }
  if (s.substring(0, 2) == "CM") {
    s = s.slice(2);
    answer += 900;
  }
  while (s.substring(0, 1) == "D") {
    s = s.slice(1);
    answer += 500;
  }
  if (s.substring(0, 2) == "CD") {
    s = s.slice(2);
    answer += 400;
  }
  while (s.substring(0, 1) == "C") {
    s = s.slice(1);
    answer += 100;
  }
  if (s.substring(0, 2) == "XC") {
    s = s.slice(2);
    answer += 90;
  }
  while (s.substring(0, 1) == "L") {
    s = s.slice(1);
    answer += 50;
  }
  if (s.substring(0, 2) == "XL") {
    s = s.slice(2);
    answer += 40;
  }
  while (s.substring(0, 1) == "X") {
    s = s.slice(1);
    answer += 10;
  }
  if (s.substring(0, 2) == "IX") {
    s = s.slice(2);
    answer += 9;
  }
  while (s.substring(0, 1) == "V") {
    s = s.slice(1);
    answer += 5;
  }
  if (s.substring(0, 2) == "IV") {
    s = s.slice(2);
    answer += 4;
  }

  answer += s.length;

  return answer;
};
exports.romanToInt = romanToInt;
// @lc code=end

