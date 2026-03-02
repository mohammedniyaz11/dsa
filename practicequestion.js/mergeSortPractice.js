function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2)
    let leftArr = mergeSort(arr.slice(0, mid));
    let rightArr = mergeSort(arr.slice(mid));
    return mergeArrAndSort(leftArr, rightArr)

}

function mergeArrAndSort(leftArr, rightArr) {
    let i = 0;
    let j = 0;
    let finalArr = []
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            finalArr.push(leftArr[i])
            i++;
        } else {
            finalArr.push(rightArr[j])
            j++;
        }
    }
    return finalArr.concat(leftArr.slice(i)).concat(rightArr.slice(j))

}