/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0);
    let current=dummy;
    let carry = 0;
    while (l1 ||l2 || carry) {
        let val_1 = l1 ? l1.val : 0;
        let val_2 = l2 ? l2.val : 0;
        
        let sum=val_1+val_2+carry;
        carry=Math.floor(sum/10)
        current.next = new ListNode(sum % 10);
        current = current.next;
        if(l1){
           l1=l1.next
        }
          if(l2){
           l2=l2.next
        }

    }
    return dummy.next;



};