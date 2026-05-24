/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
    let map = new Map();
    let count = 0;
    let totalNumberRab = 0;
    for (let ele of answers) {
        map.set(ele, (map.get(ele) + 1) || 1)
    }
    for (let key of map.keys()) {
        let rabbitsize = key + 1;
        let group = Math.ceil(map.get(key) / rabbitsize);
        let currentSizeRab = group * rabbitsize;
        totalNumberRab = totalNumberRab + currentSizeRab
    }
    return totalNumberRab


};