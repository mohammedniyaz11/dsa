function fact(n){
    if(n===1){
        return  1;
    }
    return n*fact(n-1)
}

console.log(fact(5))


// function countDigitsNumber(n){
//     if(n==0){
//         return 0;

//     }
//     return 1+countDigitsNumber(Math.floor(n/10))

// }

// console.log(countDigitsNumber(123456))