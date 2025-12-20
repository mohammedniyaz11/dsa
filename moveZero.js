//problem 283

function moveZero(nums){
    let x=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[x]=nums[i]
            x++;
        }
    }
    for(let i=x;i<nums.length;i++){
        nums[i]=0
    }
    return nums;
}


console.log(moveZero([0,1,0,3,12]))