function longestCommonPrefix(arr) {
    let x = 0;
    while (arr[0].length > x) {
        let char = arr[0][x];
        for (let i = 1; i < arr.length; i++) {
            if (char !== arr[i][x]) {
                return arr[0].substring(0, x)

            }
        }
        x++;



    }
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))