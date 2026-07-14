function buildLPS(pattern) {
    const lps = new Array(pattern.length).fill(0);

    let len = 0; // Length of previous longest prefix suffix
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                // Try the previous longest prefix
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    console.log(lps)

    return lps;
}

function kmpSearch(text, pattern) {
    const lps = buildLPS(pattern);

    let i = 0;
    let j = 0;

    while (i < text.length) {

        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            return i - j; // Return first match
        } else if (i < text.length && text[i] !== pattern[j]) {

            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1; // Pattern not found
}



// Example
const text = "ABABCABABD";
const pattern = "ABABD";

kmpSearch(text, pattern);