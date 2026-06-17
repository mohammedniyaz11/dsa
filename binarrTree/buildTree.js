/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let preorderIndex = 0;

    const inorderMap = new Map();

    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    function build(left, right) {
        if (left > right) {
            return null;
        }

        const rootVal = preorder[preorderIndex++];
        const root = new TreeNode(rootVal);

        const inorderIndex = inorderMap.get(rootVal);

        root.left = build(left, inorderIndex - 1);
        root.right = build(inorderIndex + 1, right);

        return root;
    }

    return build(0, inorder.length - 1);
};