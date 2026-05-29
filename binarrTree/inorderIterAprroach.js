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
var inorderTraversal = function (root) {

    let curr = root;
    let ans = [];
    let stack = [];

    while (curr || stack.length>0) {
        while(curr){
            stack.push(curr);
            curr=curr.left
        }
        let ele=stack.pop();
        ans.push(ele.val)
        curr=ele.right

    }
    return ans
};