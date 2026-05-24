function anagram(str1, str2) {
    // let obj1 = {}
    // let obj2 = {};
    let map = new Map();
    for (let char of str1) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }

    for (let char of str2) {
        if (map.has(char)) {
            if (map.get(char) === 0) {
                return false;
            }
            map.set(char, map.get(char) - 1)
        } else {
            return false;
        }

    }
    return true;
}