const { mySqrt } = require("./69.sqrt-x");

describe("No.69 test.", () => {
    test("In:4, Out:2.", () => {
        expect(mySqrt(4)).toBe(2);
    });
    test("In:8, Out:2.", () => {
        expect(mySqrt(8)).toBe(2);
    });
    test("In:0, Out:0.", () => {
        expect(mySqrt(0)).toBe(0);
    });
});