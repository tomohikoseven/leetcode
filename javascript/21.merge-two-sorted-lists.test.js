const { mergeTwoLists } = require("./21.merge-two-sorted-lists");

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
describe("No.21 test.", () => {
  test("[1,2],[] merge [1,2].", () => {
    let list1 = new ListNode(1, new ListNode(2, undefined));
    expect(mergeTwoLists(list1, [])).toEqual(list1);
  });
});