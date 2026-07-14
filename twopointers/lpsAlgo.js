// function lps(pattern) {
//     let makeArr = new Array(pattern.length).fill(0)
//     let i = 1;
//     let len = 0;
//     while (i<pattern.length) {
//         if (pattern[i] === pattern[len]) {
//             len++;
//             makeArr[i] = len
//             i++;
//         }else{
//             if(len !== 0){
//                 len=makeArr[len-1];
//                 i++;
//             }else{
//                 makeArr[i]=0;
//                 i++;
//             }
//         }

//     }
//     return makeArr
// }
// const pattern = "ABABD";
// console.log(lps(pattern))

function lps(pattern) {
    let patternArr = new Array(pattern.length).fill(0)
    let i = 1;
    let len = 0;
    while (i < pattern.length) {
        if (pattern[i] == pattern[len]) {
            len++;
            patternArr[i] = len;
            i++;
        } else if (len !== 0) {
            len = patternArr[len-1];
            i++;
        } else {
            i++;
        }
    }
    return patternArr
}

console.log(lps("ABABD"))