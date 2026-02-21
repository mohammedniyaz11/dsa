// function findMax(arr,idx,max){
//     if(arr.length==idx){
//         return max;
//     }

//     max=Math.max(arr[idx],max);
//     return findMax(arr,idx+1,max);
// }

// console.log(findMax([10,2,9,11,9],0,-Infinity))

function findMax(arr, idx) {
    if (arr.length - 1 == idx) {
        return arr[idx]

    }

    let res = findMax(arr, idx + 1);
    if (res > arr[idx]) {
        return res;
    } else {
        return arr[idx]
    }
}