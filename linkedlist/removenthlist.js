/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
   let fast=head;
   let slow=head;
   for(let i=0;i<n;i++){
    fast=fast.next;
   }
   if (fast === null) {
       return head.next;
   }
   while(fast && fast.next){
    fast=fast.next;
    slow=slow.next;
   }
   slow.next=slow.next.next;
   return head
};

var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode(0, head);
    let length = 0;
    let first = head;
    while (first) {
        length++;
        first = first.next;
    }
    let prev = sentinel;
    for (let i = 0; i < length - n; i++) {
        prev = prev.next;
    }
    prev.next = prev.next.next;
    return sentinel.next;
};