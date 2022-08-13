const palin = require('./9.palindrome-number.js');

describe("Not palindrome.", () => {
  test("123", () => {
    expect(palin.isPalindrome(123)).toBe(false);
  });
});

describe("Palindrome.", () => {
  test("121", () => {
    expect(palin.isPalindrome(121)).toBe(true);
  });
});