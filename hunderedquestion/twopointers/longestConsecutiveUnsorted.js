// var longestConsecutive = function(nums) {
//     if (nums.length === 0) return 0;

//     let set = new Set(nums);
//     let maxLength = 0;

//     for (let num of set) {

//         // Only start counting if it's the beginning of sequence
//         if (!set.has(num - 1)) {

//             let currentNum = num;
//             let currentLength = 1;

//             while (set.has(currentNum + 1)) {
//                 currentNum++;
//                 currentLength++;
//             }

//             maxLength = Math.max(maxLength, currentLength);
//         }
//     }

//     return maxLength;
// };

// // Example
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

// function longestCinsecutive(arr) {
//     let set = new Set(arr);
//     let max = 0;
//     for (let num of set) {
//         if (!set.has(num - 1)) {
//             let currentNum = num;
//             let currentLength = 1;
//             while (set.has(currentNum + 1)) {
//                 currentNum = currentNum + 1;
//                 currentLength = currentLength + 1;
//             }
//             max = Math.max(max, currentLength)

//         }
//     }
//     return max;
// }


function longestCinsecutive(str) {

    // console.log(set)
    let num = []
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        num.push(str.charCodeAt(i))

    }
    const set = new Set(num)


    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;
            while (set.has(currentNum + 1)) {
                currentNum = currentNum + 1;
                currentLength = currentLength + 1;
            }
            max = Math.max(max, currentLength)

        }


    }
    return max;
}

console.log(longestCinsecutive("abxbs"))