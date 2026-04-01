function rempoveOutermost(str) {
    let concatStr = "";
    let depth = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            if (depth > 0) {
                concatStr = concatStr + str[i]
            }
            depth++;
        } else {
            depth--;
            if (depth > 0) {
                concatStr = concatStr + str[i];
            }
        }

    }
    return concatStr;

}