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
var preorderTraversal = function (root) {
    let curr = root;
    let stack = [];
    let ans = [];
    while (curr || stack.length) {
        ans.push(curr.val)
        if (curr.right) {
            stack.push(curr.right)
        }

        if (curr.left) {
            stack.push(curr.left)
        }

        curr = stack.pop()
    }
    return ans
};