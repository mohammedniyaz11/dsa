/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currentMax=0;
    let max=-Infinity;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            currentMax=currentMax+1;
        }else{
            max=Math.max(max,currentMax);
            currentMax=0
        }
    }
    max=Math.max(max,currentMax);
    return max
    
};