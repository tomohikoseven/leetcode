const rtoi = require("./13.roman-to-integer");
const romanToInt = rtoi.romanToInt;

describe("13.roman-to-integer", () => {
  test("I to 1", () => {
    expect(romanToInt("I")).toBe(1);
  });
  test("III to 3", () => {
    expect(romanToInt("III")).toBe(3);
  });
  test("IV to 4", () => {
    expect(romanToInt("IV")).toBe(4);
  });
  test("V to 5.", () => {
    expect(romanToInt("V")).toBe(5);
  });
  test("VI to 6.", () => {
    expect(romanToInt("VI")).toBe(6);
  });
  test("IX to 9.", () => {
    expect(romanToInt("IX")).toBe(9);
  });
  test("X to 10.", () => {
    expect(romanToInt("X")).toBe(10);
  });
  test("XI to 11.", () => {
    expect(romanToInt("XI")).toBe(11);
  });
  test("XIV to 14.", () => {
    expect(romanToInt("XIV")).toBe(14);
  });
  test("XIX to 19.", () => {
    expect(romanToInt("XIX")).toBe(19);
  });
  test("XX to 20.", () => {
    expect(romanToInt("XX")).toBe(20);
  });
  test("XXXIX to 39.", () => {
    expect(romanToInt("XXXIX")).toBe(39);
  });
  test("XL to 40.", () => {
    expect(romanToInt("XL")).toBe(40);
  });
  test("L to 50.", () => {
    expect(romanToInt("L")).toBe(50);
  });
  test("LVIII to 58.", () => {
    expect(romanToInt("LVIII")).toBe(58);
  });
  test("XC to 90.", () => {
    expect(romanToInt("XC")).toBe(90);
  });
  test("CD to 400.", () => {
    expect(romanToInt("CD")).toBe(400);
  });
  test("D to 500.", () => {
    expect(romanToInt("D")).toBe(500);
  });
  test("CM to 900.", () => {
    expect(romanToInt("CM")).toBe(900);
  });
  test("M to 1000.", () => {
    expect(romanToInt("M")).toBe(1000);
  });
  test("MCMXCIV to 1994.", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });


});