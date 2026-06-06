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

// console.log(nextGreaterSmall([4, 5, 2, 10]))


function nextGreaterSmall(arr) {
    let stack = [arr[arr.length - 1]];
    let result = new Array(arr.length).fill(-1)
    for (let i = arr.length - 2; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] >= arr[i]) {
            stack.pop()
        }
        if (stack.length === 0) {
            result[i] = -1;
        } else {

            result[i] = stack[stack.length - 1]
        }
        stack.push(arr[i])
    }
    return result;

}


/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let stack = [];
    let ans = new Array(temperatures.length).fill(0)
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let prevIndex = stack.pop();
            ans[prevIndex] = i - prevIndex
        }
        console.log(stack)
        stack.push(i)
    }
    return ans

};
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))

function nsol(arr) {

    let ans=[]
    let stack = [0];
    let res = [-1]
    for (let i = 1; i < arr.length; i++) {
        while (stack.length && arr[i] >=arr[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length == 0) {
            res[i] = -1;
        } else {
            res[i] = stack[stack.length - 1]
        }
        stack.push(i)
     

    }
    for(let i=0;i<arr.length;i++){
        ans[i]=i-res[i]
    }
    return ans;
}

console.log(nsol([10,7,8,9,14,3]))