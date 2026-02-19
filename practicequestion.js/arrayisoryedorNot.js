function arraySortedNotInrotate(arr) {
    let brokenPoint = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[(i + 1) % arr.length]) {
            brokenPoint = brokenPoint + 1;
        }
        if (brokenPoint === 2) {
            return false;
        }
    }
    return true;
}

console.log(arraySortedNotInrotate([6, 7, 8, 1, 2, 3, 4, 5]))