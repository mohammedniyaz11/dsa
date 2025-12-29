// function sumNnumbers(n, sum=0) {
//     if (n == 6) {
//         return sum;
//     }
//        sum = sum + n
   
//     n = n + 1;
//     return sumNnumbers(n,sum)

// }

// console.log(sumNnumbers(0))



function sumOfNumbers(n){
    if(n==0){
        return 0
    }
    return n+sumOfNumbers(n-1)
}

console.log(sumOfNumbers(5))

