var subarraySum = function(nums, k) {
    let count = 0;
    let prefixSum = 0;
    let map = new Map();
    
    // Base case: prefix sum 0 occurs once
    map.set(0, 1);

    for (let num of nums) {
        prefixSum += num;

        // Check if (prefixSum - k) exists
        if (map.has(prefixSum - k)) {
            count += map.get(prefixSum - k);
        }

        // Store prefix sum frequency
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
};

let nums = [-1, -1, 1];
let k = 1;
console.log(subarraySum(nums, k));