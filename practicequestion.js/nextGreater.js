function nextGreater(arr) {
    let newArr = new Array(arr.length).fill(-1)
    for (let i = 0; i < arr.length; i++) {
        let right = i + 1
        while (right < arr.length && arr[right] <= arr[i]) {
            right++;
        }
        if (right < arr.length) {
            newArr[i] = arr[right]
        }
    }
    return newArr;
}


console.log(nextGreater([4, 5, 2, 10]))