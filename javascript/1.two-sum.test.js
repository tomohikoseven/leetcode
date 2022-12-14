const { twoSum } = require("./1.two-sum");

describe("twoSum test.", () => {
  test("in:[2,7,11,15],target:9 -> output:[0,1]", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  test("in:[3,2,4],target:6 -> output:[1,2]", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
  test("in:[3,3],target:6 -> output:[0,1]", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});