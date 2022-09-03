const { searchInsert } = require("./35.search-insert-position");

describe("No.35 test.", () => {
  test("Input:[1,3,5,6], target=5, Output:2.", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  })
  test("Input:[1,3,5,6], target=2, Output:1.", () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  })
  test("Input:[1,3,5,6], target=7, Output:4.", () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  })
  test("Input:[1,3,5,6], target=1, Output:0.", () => {
    expect(searchInsert([1, 3, 5, 6], 1)).toBe(0);
  })
  test("Input:[1,3,5,6], target=6, Output:3.", () => {
    expect(searchInsert([1, 3, 5, 6], 6)).toBe(3);
  })
  test("Input:[1,3,5], target=4, Output:2.", () => {
    expect(searchInsert([1, 3, 5], 4)).toBe(2);
  })
});