const { strStr } = require("./28.implement-str-str");

describe("No.28 test.", () => {
  test("haystack = hello, needle = ll, return 2.", () => {
    const haystack = "hello";
    const needle = "ll";
    const expected = 2;
    expect(strStr(haystack, needle)).toBe(expected);
  });
  test("haystack = aaaaa, needle = bba, return -1.", () => {
    const haystack = "aaaaa";
    const needle = "bba";
    const expected = -1;
    expect(strStr(haystack, needle)).toBe(expected);
  });
  test("haystack = aaaaa, needle = '', return 0.", () => {
    const haystack = "aaaaa";
    const needle = "";
    const expected = 0;
    expect(strStr(haystack, needle)).toBe(expected);
  });
});