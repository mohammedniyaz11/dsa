function longestMountain(arr) {
    let n = arr.length;
    let max = 0;

    for (let i = 1; i < n - 1; i++) {

        if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {

            let left = i - 1;
            let right = i + 1;

            while (left > 0 && arr[left - 1] < arr[left]) {
                left--;
            }

            while (right < n - 1 && arr[right] > arr[right + 1]) {
                right++;
            }

            max = Math.max(max, right - left + 1);
        }
    }

    return max;
}
let arr = [2, 1, 4, 7, 3, 2, 5]
console.log(longestMountain(arr))


function countMountains(arr) {
    let count=0
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
            let insArr=[]
            let left = i - 1;
            let right = i + 1;
            while (left > 0 && arr[left] > arr[left - 1]) {
                insArr.push(arr[left])
                left--;

            }

            while (right < arr.length - 1 && arr[right] > arr[right + 1]) {
                insArr.push(arr[right])
                right++
            }
            count++;
            // mainArr.push(insArr)
            i=right;
            
            // max = Math.max(max, right - left + 1)

        }
    }
    return count
}