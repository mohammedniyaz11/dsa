function lengthofLongestSubArrayZero(arr) {
    let map = new Map();
    map.set(0, -1);
    let maxLen = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (map.has(sum)) {
            let len = i - map.get(sum)
            maxLen = Math.max(maxLen, len)
        } else {
            map.set(sum, i)
        }
    }
    return maxLen



}