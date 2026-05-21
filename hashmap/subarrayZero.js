function subArrayZero(arr) {
    let map = new Map();
    let count = 0
    map.set(0, 1)
    let sum = 0
    for (let num of arr) {
        sum = sum + num;
        if (map.has(sum)) {
            count = count + map.get(sum);
            map.set(sum, map.get(sum) + 1)
        } else {
            map.set(sum, 1)
        }
    }
    return count;
}