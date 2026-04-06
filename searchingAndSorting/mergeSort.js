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



function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let mid=Math.floor(arr.length/2);
    let left=mergeSort(arr.slice(0,mid));
    let right=mergeSort(arr.slice(mid));
        return mergeSortTwoArr(left,right)

}



function mergeSortTwoArr(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = []
    while (arr1.length > i && arr2.length > j) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    return result.concat(arr1.slice(i)).concat(arr2.slice(j))
}


function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let swap=false;
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                swap=true;
            }
        }
        if(!swap){
            break;
        }
    }
    return arr;
}


function selctionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapEle = i;
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[swapEle] > arr[j]) {
                swapEle = j;
            }
        }
        if (swapEle !== i) {
            let temp = arr[i];
            arr[i] = arr[swapEle];
            arr[swapEle] = temp;
        }
    }
    return arr;
}


function inserTionSort(arr){
    for(let i=1;i<arr.length;i++){
        let key=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j]
            j--;
        }
        arr[j+1]=key;
    }
    return arr;
    
}