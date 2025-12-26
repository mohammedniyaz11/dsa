// function recurse(nums){
//     if(nums==0){
//         return;
//     }
//     console.log(nums);
//     nums=nums-1;
//     recurse(nums)
// }

// recurse(5)


function recurse(nums){
    if(nums>5){
        return
    }
    console.log(nums)
    nums=nums+1;
    recurse(nums)
}

recurse(1)