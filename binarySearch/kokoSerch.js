function kokSearch(arr, h) {
    let left = 1;
    let right = Math.max(...arr);
    while (left < right) {
        let middle = Math.floor((left + right) / 2);
        let hour = 0;
        for (let i = 0; i < arr.length; i++) {
            let calcu = Math.ceil((arr[i] / middle));
            hour = hour + calcu;
        }
        if (hour <= h) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    return left;
}