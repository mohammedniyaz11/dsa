function subsequence(str1, str2) {
    let k = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] == str1[k]) {
            k = k + 1;
        }

    }
    if (k == str1.length) {
        return true
    }
}