// function printArr(arr,idx){
//     if(arr.length==idx){
//         return;
//     }
//     console.log(arr[idx])
//     return printArr(arr,idx+1)
// }

// printArr([1,2,3,4,5,6],0)


function printArrReverse(arr,idx){
     if(arr.length==idx){
        return;
    }
  
    printArrReverse(arr,idx+1)
    console.log(arr[idx])
    return

}
printArrReverse([1,2,3,4,5,6],0)