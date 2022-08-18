const { isValid } = require("./20.valid-parentheses");

describe("No.20 test.", () => {
  // ---
  // OK
  // ---
  test("() is true.", () => {
    expect(isValid("()")).toBe(true);
  });
  test("[] is true.", () => {
    expect(isValid("[]")).toBe(true);
  });
  test("{} is true.", () => {
    expect(isValid("{}")).toBe(true);
  });
  test("(()) is true.", () => {
    expect(isValid("(())")).toBe(true);
  });
  test("(){}}{ is true.", () => {
    expect(isValid("(){}}{")).toBe(true);
  });
  // ---
  // NG
  // ---
  test("(] is false.", () => {
    expect(isValid("(]")).toBe(false);
  });
  test("(} is false.", () => {
    expect(isValid("(}")).toBe(false);
  });
  test("[ is false.", () => {
    expect(isValid("[")).toBe(false);
  });
});

// describe("sub function test.", () => {
//   test("[ count 1.", () => {
//     expect(matchCnt('\\]')).toBe(1);
//   })
// });