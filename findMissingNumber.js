/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
   let sum=nums.length*(nums.length+1)/2;
   let totalSumOfArr=0;
   for(let i=0;i<nums.length;i++){
    totalSumOfArr=nums[i]+totalSumOfArr;
   }
   return sum-totalSumOfArr;
    
};