// function characterReplacement(s, k) {
//     let left = 0;
//     let maxFreq = 0;
//     let map = new Map();
//     let maxLength = 0;

//     for (let right = 0; right < s.length; right++) {
//         map.set(s[right], (map.get(s[right]) || 0) + 1);

//         maxFreq = Math.max(maxFreq, map.get(s[right]));

//         while ((right - left + 1) - maxFreq > k) {
//             map.set(s[left], map.get(s[left]) - 1);
//             left++;
//         }

//         maxLength = Math.max(maxLength, right - left + 1);
//     }

//     return maxLength;
// }

// let s = "AABABBA"
// let k = 1
// console.log(characterReplacement(s,1))

// var characterReplacement = function(s, k) {
//     let map = new Map();
//     let i = 0;
//     let max = 0;

//     for (let j = 0; j < s.length; j++) {       // j always advances
//         map.set(s[j], (map.get(s[j]) || 0) + 1);

//         if (isValidWindow(map, k)) {
//             max = Math.max(max, j - i + 1);
//         } else {
//             map.set(s[i], map.get(s[i]) - 1);
//             if (map.get(s[i]) == 0) map.delete(s[i]);
//             i++;
//         }
//     }

//     return max;
// };

// function isValidWindow(map, k) {
//     let totalCount = 0;
//     let maxValue = 0;
//     for (let value of map.values()) {
//         totalCount += value;
//         maxValue = Math.max(maxValue, value);
//     }
//     return totalCount - maxValue <= k;
// }



/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let j=0;
  let max=0;
  let map=new Map()
  for(let i=0;i<s.length;i++){
    map.set(s[i],(map.get(s[i])||0)+1);
    if(isValidWindow(map,k)){
        console.log("hi")
        max=Math.max(max,i-j+1)
    }else{
        j++;
        map.set(s[j],map.get(s[j])-1);
        if(map.get(s[j])===0){
            map.delete(s[j])
        }
    }
  }
  return max  
};

function isValidWindow(map,k){
    console.log(map)
    let totalValue=0;
    let maxValue=0;
    for(let val of map.values()){
        totalValue=totalValue+val;
        maxValue=Math.max(maxValue,val)
    }
    console.log(totalValue)
    return totalValue-maxValue<=k;
}

console.log(characterReplacement("ABAB",2))