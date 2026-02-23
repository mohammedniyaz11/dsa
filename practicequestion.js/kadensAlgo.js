function kadensAlgo(arr) {
    let max = arr[0]
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        max = Math.max(max, sum);
        if (sum < 0) {
            sum = 0
        }

    }
    return max
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(kadensAlgo(arr))


function logestSubString(str) {
    let max = 0;
    let set = new Set()
    let left = 0
    for (let i = 0; i < str.length; i++) {
        while(set.has(str[i])){
            set.delete(str[left]);
            left++

        }


        set.add(str[i])
        max = Math.max(max, i - left + 1)

    }
    return max
}