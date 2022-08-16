const { longestCommonPrefix } = require("./14.longest-common-prefix");

describe("No.14 test.", () => {
  test('["flower", "flow"] -> "flow"', () => {
    expect(longestCommonPrefix(["flower", "flow"])).toBe("flow");
  });
  test('["flower", "flow", "flight"] -> "fl"', () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });
  test('["dog", "car", "flight"] -> ""', () => {
    expect(longestCommonPrefix(["dog", "car", "flight"])).toBe("");
  });
});