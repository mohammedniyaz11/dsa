// function insertionSort(arr) {
//   if (!Array.isArray(arr)) return false;

//   for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];        // current element
//     let j = i - 1;

//     // Move elements that are greater than key
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     // Place key at correct position
//     arr[j + 1] = key;
//   }

//   return arr;
// }

// // Example
// console.log(insertionSort([5, 3, 4, 1, 2]));
// // Output: [1, 2, 3, 4, 5]
                                                  

function insertionSort(arr){
  for(let i=1;i<arr.length;i++){
    let j=i-1;
    let key=arr[i]

    while(j>=0 && arr[j]>key){
      arr[j+1]=arr[j]
      j--;
    }

    arr[j+1]=key;
  }
  return arr;
}