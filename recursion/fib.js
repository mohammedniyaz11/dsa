function fivNormal(n){
    let a=0;
    let b=1;
    for(let i=2;i<=n;i++){
        let sum=a+b;
        console.log(sum)
        a=b;
        b=sum;
    }

    return b;
}


/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n<=1){
        return n;
    }
    return fib(n-1)+fib(n-2)
    
};
console.log(fib(6))