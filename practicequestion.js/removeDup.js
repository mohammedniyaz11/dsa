function removeDup(arr){
    let k=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]!==arr[k]){
            k++;
            arr[k]=arr[i]
        }
    }
    return arr.slice(0,k+1)
}

console.log(removeDup([1,1,2,3,4]))

function removeElement(arr,target){
    let k=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==target){
            arr[k]=arr[i]
            k++;
        }
    }
    return arr.slice(0,k)
}

console.log(removeElement([1,1,2,3,4],1))