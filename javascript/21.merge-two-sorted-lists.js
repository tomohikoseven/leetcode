/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1.val == 0 && list2.val == 0) {
    return list1;
  }
  if (list1.val == 0) {
    return list2;
  }
  if (list2.val == 0) {
    return list1;
  }
  let retList = new ListNode(0, null);
  while (list1.val || list2.val) {
    if (list1.val <= list2.val) {
      retList.next = list1;
      list1 = list1.next
    } else {
      retList.next = list2;
      list2 = list2.next;
    }
    retList = retList.next;
  }

  return retList;
};
exports.mergeTwoLists = mergeTwoLists;
// @lc code=end