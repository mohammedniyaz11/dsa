function sortedSquares(nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = new Array(nums.length);
    let index = nums.length - 1;

    while (left <= right) {
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            result[index] = leftSquare;
            left++;
        } else {
            result[index] = rightSquare;
            right--;
        }

        index--;
    }

    return result;
}

// Example
console.log(sortedSquares([-4, -1, 0, 3, 10]));