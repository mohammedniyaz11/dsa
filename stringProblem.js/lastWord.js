/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let i = s.length - 1;
    while (i >= 0 && s[i] === " ") {
        i--;
    }
    let count = 0;
    while (i >= 0 && s[i] !== " ") {
        count++;
        i--;
    }
    return count;

};


function lengthOfStrinGwiThOneLoop(str){
    let n=str.length-1;
    let count=0;
    while(n>=0){
        if(str[n]!==" "){
            count++;
        }else if(count>0){
            break;
        }
        n--;
    }
    return count;
}