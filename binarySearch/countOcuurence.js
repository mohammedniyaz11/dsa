function firstOccurence(arr, target) {
    let firstOccurenceResult = -1;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        // console.log(middle)
        if (arr[middle] == target) {
            firstOccurenceResult = middle;
            right = middle - 1;
        } else if (target > arr[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }

    }
    // console.log(firstOccurenceResult)
    return firstOccurenceResult;
}



function lastOccurence(arr, target) {
    let lastOccurenceResult = -1;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] == target) {
            lastOccurenceResult = middle;
            left = middle + 1;
        } else if (target > arr[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }

    }
    return lastOccurenceResult;
}

function countLastAndFirst(arr, target) {
    let firstOccurenceResult = firstOccurence(arr, target);
    if (firstOccurenceResult === 0) {
        return 0;
    }
    let lastOccurenceResult = lastOccurence(arr, target);
    console.log(lastOccurenceResult)
    return lastOccurenceResult - firstOccurenceResult + 1

}

// console.log(countLastAndFirst([1, 1, 2, 2, 2, 2, 3], 2))
console.log(countLastAndFirst([1, 1, 2, 2, 2, 2, 3], 4))
// console.log(countLastAndFirst([8, 9, 10, 12, 12, 12], 12))


function nu(arr){
    let last=0;
}