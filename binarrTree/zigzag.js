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
var zigzagLevelOrder = function (root) {
    if (!root) {
        return []
    }
    let iterate=1;
    let queue = [root];
    let res = []
    while (queue.length) {
        let smallArr = [];
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            smallArr.push(node.val);

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        if(iterate%2==0){
            res.push(smallArr.reverse())
        }else{
            res.push(smallArr)
        }
        iterate++;
    


    }
    return res;
};