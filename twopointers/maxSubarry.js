function maxSubArra(arr, k) {
    let max = -Infinity;
    let count = 0;
    for (let i = 0; i < k; i++) {
        count = count + arr[i]
    }
    max = count;
    for (let i = k; i < arr.length; i++) {
        count = count - arr[i - k] + arr[i]
        max = Math.max(max, count)
    }
    return max
}


let nums = [2, 1, 5, 1, 3, 9, 2]
let k = 3

console.log(maxSubArra(nums, k))