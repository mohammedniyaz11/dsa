/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
   let setA=new Set();
   let currentVal=headA;
   let currentValB=headB;
while(currentVal){
    setA.add(currentVal)
    currentVal=currentVal.next;
}
while(currentValB){
    if(setA.has(currentValB)){
        return currentValB
    }
    currentValB=currentValB.next
}
return null
};