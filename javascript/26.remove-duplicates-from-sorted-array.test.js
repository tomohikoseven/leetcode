const { removeDuplicates } = require("./26.remove-duplicates-from-sorted-array");

describe("No.26 test.", () => {
  test("[1,1,2] return 2. nums = [1,2,_]", () => {
    let nums = [1, 1, 2];
    let expects = [1, 2, 0];
    let retNum = removeDuplicates(nums);
    console.log(nums);
    expect(retNum).toBe(2);
    // console.log(nums);
    for (let i = 0; i < retNum; i++) {
      expect(nums[i]).toBe(expects[i]);
    }
  });
});