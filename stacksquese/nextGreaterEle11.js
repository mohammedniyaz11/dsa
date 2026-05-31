function nextGreaterEleL(arr) {
    let stack = [arr[arr.length - 1]];
    let ans = [-1];
    for (let i = arr.length - 2; i >= 0; i--) {

        while (stack.length && arr[i] > stack[stack.length - 1]) {
            stack.pop();

        }
        if (stack.length == 0) {
            ans.push(-1)
        } else {
            ans.push(stack[stack.length - 1])
        }
        stack.push(arr[i])

    }
    return ans.reverse()
}

console.log(nextGreaterEleL([4, 5, 2, 10]))