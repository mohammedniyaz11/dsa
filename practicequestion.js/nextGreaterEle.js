/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let map = new Map();
    let stack = [];
    for (let num of nums2) {
        while (stack.length && num > stack[stack.length - 1]) {
            map.set(stack.pop(), num)
        }
        stack.push(num)
    }
    while (stack.length) {
        map.set(stack.pop(), -1)
    }
    const resultArr=[]

   for(let num of nums1){
    resultArr.push(map.get(num)) 
   }
   return resultArr

};

console.log(nextGreaterElement([1,3,5,2,4],[6,5,4,3,2,1,7]))