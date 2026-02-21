function firstOcuurence(heyStack, needle) {
    for (let i = 0; i < heyStack.length; i++) {
        let j = 0;
        while (j < needle.length && heyStack[i + j] == needle[j]) {
            j = j + 1;
        }
        if (j == needle.length) {
            return i
        }

    }
    return false
}