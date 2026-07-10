/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let arr=nums;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (nums[middle] == target) {
            return true
        }

        if (nums[middle] === nums[right] && nums[middle] === nums[left]) {
            left++;
            right--;
            continue;
        }

        if (nums[left] <= nums[middle]) {
            if (target >= arr[left] && target < arr[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }

        } else {
            if (arr[right] >= target && target > arr[middle]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
    }
    return false
};