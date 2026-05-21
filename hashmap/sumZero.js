function sumZero(arr) {
    let map = new Map();
    map.set(0, true)
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if (map.has(sum)) {
            return true
        } else {
            map.set(sum, true)
        }
    }
    return false
}

