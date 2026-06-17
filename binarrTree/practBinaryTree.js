function sumOfBt(root) {
    if (!root) {
        return 0
    }
    let stack = [root];
    let sum = 0
    while (stack.length) {
        let node = stack.pop();
        sum = sum + node.val
        node.left && stack.push(node.left);
        node.right && stack.push(node.right)
    }
    return sum
}

function sumOfBtRecurs(root) {
    if (!root) {
        return 0;
    }
    return root.val + sumOfBtRecurs(root.left) + sumOfBtRecurs(root.right)
}

function maxoFtree(root) {
    let max = -Infinity;
    function findMax(ele) {
        max = Math.max(ele.val, max)
        ele.left && findMax(ele.left);
        ele.right && findMax(ele.right);
    }
    findMax(root)
    return max

}


function min(root) {
    let max = Infinity;
    function findMax(ele) {
        max = Math.min(ele.val, max)
        ele.left && findMax(ele.left);
        ele.right && findMax(ele.right);
    }
    findMax(root)
    return max

}

function heightOfBt(root) {
    let maxHeight = 0;
    function findMaxHeight(ele, depth) {
        let res = depth + 1;
        maxHeight = Math.max(maxHeight, res)
        ele.left && findMaxHeight(ele.left, res);
        ele.right && findMaxHeight(ele.right, res);

    }
    findMaxHeight(root, 0)
    return maxHeight;
}

function preOrder(root) {
    if (!root) {
        return []
    }

    let stack = [];
    function traversal(ele) {
        stack.push(ele.val);
        ele.left && traversal(ele.left);
        ele.right && traversal(ele.right);
    }
    traversal(root)
    return stack;

}

function inorder(root) {
    if (!root) {
        return []
    }
    let stack = [];
    function traversal(ele) {
        ele.left && traversal(ele.left);
        stack.push(ele.val);
        ele.right && traversal(ele.right);

    }
    traversal(root)
    return stack;
}



function postorder(root) {
    if (!root) {
        return []
    }
    let stack = [];
    function traversal(ele) {
        ele.left && traversal(ele.left);
        ele.right && traversal(ele.right);
        stack.push(ele.val);

    }
    traversal(root)
    return stack;
}

function levelOrderTravesal(root) {
    if(!root){
        return []
    }
    let queue = [root];
    let result=[]
    while (queue.length) {
        let shiftEle=queue.shift();
        result.push(shiftEle.val);
       shiftEle.left && queue.push(shiftEle.left);
        shiftEle.right && queue.push(shiftEle.right);
    }
    return result
}