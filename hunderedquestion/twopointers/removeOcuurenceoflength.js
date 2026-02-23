function removeOccurenceofLen(arr,target){
    let k=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==target){
            arr[k]=arr[i];
            k++;
        }
    }
    return k;
}