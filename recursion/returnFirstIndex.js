function firstIndex(arr, idx, number) {
       if (arr.length == idx) {
        return -1
    }
    
    if (arr[idx] == number) {
        return idx;
    }
 
    return firstIndex(arr, idx + 1, number)
}

console.log(firstIndex([1, 9, 8, 7, 6], 0, 6))