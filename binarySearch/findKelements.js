/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    let left = 0;
    let right = arr.length - 1;
    while (right - left >= k) {
        let leftCount = Math.abs(arr[left] - x);
        let rightCount =Math.abs(arr[right] - x);
        if (leftCount > rightCount) {
            left++;
        } else {
            right--;
        }
    }
    return arr.slice(left, right + 1)
};