const { plusOne } = require("./66.plus-one");

describe("No.66 test.", () => {
  test("In:[1,2], Out:[1,3].", () => {
    expect(plusOne([1, 2])).toEqual([1, 3]);
  });
  test("In:[9], Out:[1,0].", () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });
});