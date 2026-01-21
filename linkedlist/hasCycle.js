/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let setArr=new Set()
    let current=head;
    while(current){
        if(setArr.has(current)){
            return true;
        }
        setArr.add(current)
        current=current.next
    }
    return false
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycleDup = function(head) {
    let fast=head;
    let slow=head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast){
            return true
        }
    }
    return false
    
};