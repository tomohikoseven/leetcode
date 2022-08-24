const { removeElement } = require("./27.remove-element");

describe("No.27 test.", () => {
  test("nums=[3,2,2,3],val=3 return 2, nums=[2,2,_,_].", () => {
    let nums = [3, 2, 2, 3];
    let expected = [2, 2];
    const val = 3;
    let cnt = 0;

    cnt = removeElement(nums, val);
    expect(cnt).toBe(2);
    console.log(nums);
    for (let i = 0; i < cnt; i++) {
      expect(nums[i]).toBe(expected[i]);
    }
  });
});