function returnLastIndex(arr, idx, n) {
    if (arr.length == idx) {
        return -1;
    }
    let ans = returnLastIndex(arr, idx + 1, n);
    if (ans !== -1) {
        return ans;
    }

    if (arr[idx] == n) {
        return idx;
    }

    return -1

}