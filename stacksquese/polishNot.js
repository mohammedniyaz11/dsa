/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack=[];
    for(let token of tokens){
        if(!isNaN(token)){
            stack.push(Number(token))
        }else{
            let result;
            let b=stack.pop();
            let a=stack.pop();
             if(token === "+"){
                result=a+b;
             }else if(token === "*"){
                result=a*b;
             }else if(token === "-"){
                result=a-b;
             }else if(token === "/"){
                result=Math.trunc(a/b)
                console.log(result)
             }
             stack.push(result)
        }
    }
    return stack.pop()
    
};