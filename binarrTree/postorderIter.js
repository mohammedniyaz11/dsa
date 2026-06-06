/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    if(!root){
        return []
    }
    let stack1 = [root];
    let stack2 = [];
    let curr;
    while (stack1.length) {
        curr = stack1.pop();
        stack2.push(curr.val);
        if (curr.left) {
            stack1.push(curr.left);
        }
        if (curr.right) {
            stack1.push(curr.right);
        }
    }
    return stack2.reverse()
};