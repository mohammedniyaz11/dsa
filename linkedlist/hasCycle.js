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