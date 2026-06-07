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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let stack = [root];
    let ans = [];
    while (stack.length) {
        let size = stack.length;
        let arr=[]
        for (let i = 0; i < size; i++) {
            let ele = stack.shift();
            arr.push(ele.val);
            if (ele.left) {
                stack.push(ele.left)
            }

            if (ele.right) {
                stack.push(ele.right)
            }
        }
        ans.push(arr)
    }
    return ans
};


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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let ans = []
    function traversal(curr, level) {
        if (!curr) {
            return;
        }
        if (!ans[level]) {
            ans[level] = []
        }
        ans[level].push(curr.val);
        traversal(curr.left, level + 1)
        traversal(curr.right, level + 1)
    }
    traversal(root, 0)

    return ans
};