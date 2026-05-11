/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let stack = [];
    let result = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[stack[stack.length - i]]) {
            
            let prevIndex = stack.pop();

            result[prevIndex] = i - prevIndex;


        }
        stack.push(i)
    }


};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))