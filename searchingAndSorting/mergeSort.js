// function mergeSort(arr) {
//   // Base case
//   if (arr.length <= 1) {
//     return arr;
//   }

//   // Split array into two halves
//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));

//   // Merge sorted halves
//   return merge(left, right);
// }

// function merge(left, right) {
//   let result = [];
//   let i = 0, j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] <= right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }

//   // Add remaining elements
//   return result.concat(left.slice(i)).concat(right.slice(j));
// }

// // Example
console.log(mergeSort([8,4,5,6,9,1,3,6]));


function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
   let mid=arr.length/2;
   let left=mergeSort(arr.slice(0,mid));
   let right=mergeSort(arr.slice(mid))
   return merge(left,right)
}


function merge(left,right){
    let i=0;
    let j=0;
    let newArr=[]
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            newArr.push(left[i])
            i++;
        }else{
            newArr.push(right[j])
            j++;

        }
    }

    return newArr.concat(left.slice(i)).concat(right.slice(j))
}