function mergeSortedArr(arr1,arr2){
    let p1=0;
    let p2=0;
    let newArr=[]
    for(let i=0;i<2*(arr1.length);i++){
        if(p1<arr1.length && arr1[p1]<arr2[p2]){
            newArr.push(arr1[p1])
            p1++;
        }else{
             newArr.push(arr2[p2])  
            p2++;
        }

    }
    return newArr
}

console.log(mergeSortedArr([1,3,5,7],[2,4,8,9]))










