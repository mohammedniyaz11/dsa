
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let first = -1;
    let last = -1
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) {
            first = middle;
            right = middle - 1;
        } else if (target > nums[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    left = 0;
    right = nums.length - 1

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) {
            last = middle;
            left = middle + 1;
        } else if (target > nums[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return [first, last]


};