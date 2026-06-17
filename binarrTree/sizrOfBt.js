function sizeOfByRecursion(root) {
    let count = 0;
    if (!root) {
        return 0
    }

   let stack = [root]
    while (stack.length) {
        count++;
        let nodeLeft= stack.pop();
        if (nodeLeft.left) {
            stack.push(nodeLeft.left)
        }
        if (nodeLeft.right) {
            stack.push(nodeLeft.right)
        }
    }
    return count;
}


function sizeOfByRecursion(root) {
    if (!root) {
        return 0
    }  
    
    return 1 + sizeOfByRecursion(root.left) + sizeOfByRecursion(root.right)

}