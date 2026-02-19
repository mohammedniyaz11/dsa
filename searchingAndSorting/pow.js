function power(nums,ans,pow){
    if(nums==1){
        return ans;
    }
    ans=ans*pow;
    return power(nums-1,ans,pow)
}

console.log(power(2,2,3))