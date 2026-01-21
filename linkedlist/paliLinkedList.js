/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast=head;
    let slow=head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
        // Skip middle for odd length
    if (fast !== null) {
        slow = slow.next;
    }
    let current=slow;
    let prev=null;
    while(current){
        let temp=current.next;
        current.next=prev;
        prev=current;
        current=temp;
    }
    let firstList=head;
    let secondList=prev;
    while(secondList){
        if(firstList.val !==secondList.val){
            return false
        }
        firstList=firstList.next;
        secondList=secondList.next;
    }
    return true

    
};