var minWindow = function(s, t) {
    if (!s || !t) return "";

    let targetMap = {};
    for (let char of t) {
        targetMap[char] = (targetMap[char] || 0) + 1;
    }

    let required = Object.keys(targetMap).length;
    let formed = 0;

    let windowMap = {};
    let left = 0, right = 0;

    let minLen = Infinity;
    let result = "";

    while (right < s.length) {
        let char = s[right];
        windowMap[char] = (windowMap[char] || 0) + 1;

        if (targetMap[char] && windowMap[char] === targetMap[char]) {
            formed++;
        }

        while (left <= right && formed === required) {
            let windowSize = right - left + 1;

            if (windowSize < minLen) {
                minLen = windowSize;
                result = s.substring(left, right + 1);
            }

            let leftChar = s[left];
            windowMap[leftChar]--;

            if (targetMap[leftChar] && windowMap[leftChar] < targetMap[leftChar]) {
                formed--;
            }

            left++;
        }

        right++;
    }

    return result;
};