var minWindow = function (s, t) {
    if (!s || !t) return "";

    const need = {};
    const window = {};

    for (let char of t) {
        need[char] = (need[char] || 0) + 1;
    }

    let have = 0;
    let needCount = Object.keys(need).length;

    let left = 0;
    let minLen = Infinity;
    let result = [-1, -1];

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        window[char] = (window[char] || 0) + 1;

        if (
            need[char] &&
            window[char] === need[char]
        ) {
            have++;
        }

        while (have === needCount) {
            let windowLen = right - left + 1;

            if (windowLen < minLen) {
                minLen = windowLen;
                result = [left, right];
            }

            let leftChar = s[left];

            window[leftChar]--;

            if (
                need[leftChar] &&
                window[leftChar] < need[leftChar]
            ) {
                have--;
            }

            left++;
        }
    }

    const [start, end] = result;

    return minLen === Infinity
        ? ""
        : s.slice(start, end + 1);
};