function reverseStr(str){
    let j=str.length-1;
    let revrseStr=""
    while(j>=0){
        revrseStr=revrseStr+str[j]
        j--;
    }
    return revrseStr
}

console.log(reverseStr("niyaz"))