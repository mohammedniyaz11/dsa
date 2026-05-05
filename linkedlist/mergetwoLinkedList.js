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
function Node(val, next = null) {
    this.val = val;
    this.next = next;
}
var mergeTwoLists = function (list1, list2) {
    let dummyList = new Node(0);
    let dupList = dummyList;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            dummyList.next = new Node(list1.val)
            list1 = list1.next
            dummyList = dummyList.next
        } else {
            dummyList.next = new Node(list2.val)
            list2 = list2.next
            dummyList = dummyList.next
        }

    }

    while (list1) {
        dummyList.next = new Node(list1.val)
        list1 = list1.next
        dummyList = dummyList.next
    }

    while (list2) {
        dummyList.next = new Node(list2.val)
        list2 = list2.next
        dummyList = dummyList.next
    }
    return dupList.next;
};