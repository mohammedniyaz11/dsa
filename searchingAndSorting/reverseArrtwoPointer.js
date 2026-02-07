function kElemet(arr,k){
    const res=reverseTwoPointer(arr)
    console.log(res)
}


function reverseTwoPointer(arr){
    let i=0;
    let j=arr.length-1;
    while(i<j){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp;
        j--;
        i++;
    }
    return arr
}
console.log(kElemet([1,2,4,5],2))