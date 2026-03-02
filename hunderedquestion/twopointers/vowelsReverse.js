function vowelsReverse(s) {
    let i = 0;
    let arrToSplit=s.arrSplt(" ")
    let j = s.length - 1;
    let arr = ["a", "e", "i", "o", "u"]
    while (i < j) {
        if (arr.includes(s[i]) && arr.includes(s[j])) {
            let temp = s[i];
            s[i] = s[j]
            s[j] = temp;
            i++;
            j--;
        } else if (arr.includes(s[i]) === false) {
            i++;
        } else if (arr.includes(s[j]) === false) {
            j--;
        }

    }
    return s;



}

console.log(vowelsReverse("hello"))