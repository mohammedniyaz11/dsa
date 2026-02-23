function findPairDifferece(arr, k) {
    let map = new Map();
    for (let ele of arr) {
        map.set(ele, 1)
    }
    console.log(map)

    for (let ele of arr) {
        let res = k + ele;
        if (map.get(res)) {
            return true;
        }
    }
    return false
}
let arr = [1, 8, 30, 40, 10]
let k = 61
console.log(findPairDifferece(arr,k))

function findPairDifference(arr, k) {
    let set = new Set(arr);

    for (let ele of arr) {
        if (set.has(ele + k) || set.has(ele - k)) {
            if (k !== 0 || set.size !== arr.length) {
                return true;
            }
        }
    }
    return false;
}