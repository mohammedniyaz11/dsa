/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let middle = Math.floor((left + right) / 2);
        if (middle % 2 == 1) {
            middle--;
        }
        if (nums[middle] === nums[middle + 1]) {
            left = middle + 2;
        } else {
            right = middle;
        }

    }
    return nums[left]
};