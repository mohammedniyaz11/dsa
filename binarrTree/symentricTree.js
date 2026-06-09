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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let ans = false;
    function isMirror(left, right) {
        if (!left && !right) {
            return true
        }

        if (!left || !right) {
            return false
        }
        return left.val === right.val &&
            isMirror(left.left, right.right) && isMirror(left.right, right.left)

    }
    return isMirror(root.left, root.right )

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let queue = [root.left, root.right];
    while (queue.length) {
        let ele1 = queue.shift();
        let ele2 = queue.shift();
        if (!ele1 && !ele2) {
            continue
        }
        if (!ele1 || !ele2) {
            return false
        }
        if (ele1.val !== ele2.val) {
            return false
        }
        queue.push(ele1.left, ele2.right)
        queue.push(ele1.right, ele2.left)
    }
    return true
};