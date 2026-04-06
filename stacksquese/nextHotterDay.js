function nextHotterDay(tempearature){
    let stack=[]
    for(let i=0;i<tempearature.length;i++){
        let k=0;
        let found=false;
        for(let j=i+1;j<tempearature.length;j++){
            k=k+1;
            if(tempearature[j]>tempearature[i]){
                stack.push(k);
                found=true;
                break;
            }
        }
        if(!found){
            stack.push(0)
        }
    }
    return stack;
}

console.log(nextHotterDay([73,74,75,71,69,72,76,73]))



var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length).fill(0);
    let stack = []; // will store indices

    for (let i = 0; i < temperatures.length; i++) {

        while (
            stack.length &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            let prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }

        stack.push(i);
    }

    return result;
};