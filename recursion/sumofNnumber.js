// function sumNnumbers(n, sum=0) {
//     if (n == 6) {
//         return sum;
//     }
//        sum = sum + n
   
//     n = n + 1;
//     return sumNnumbers(n,sum)

// }

// console.log(sumNnumbers(0))



// function sumOfNumbers(n){
//     if(n==0){
//         return 0
//     }
//     return n+sumOfNumbers(n-1)
// }

// console.log(sumOfNumbers(5))

function reverseNumber(num){
    let rev=0;
    while(num>0){
        let mod=num%10;
        rev=rev*10+mod;
        num=Math.floor(num/10)
    }
    return rev;
}

console.log(reverseNumber(123456))
