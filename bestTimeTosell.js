// function bestTimeToSell(arr) {
//     let max = 0
//     let minPrice = Infinity
//     for (let price of arr) {
//         if (price < minPrice) {
//             console.log("===")
//             minPrice = price;
//         } else {
//             let profit = price - minPrice
//             max = Math.max(max,profit)
//         }
//     }
//     return max
// }

// console.log(bestTimeToSell([7, 1, 5, 3, 6, 4]))


function bestTimeToSell(arr){
    let max=0;
    let min=Infinity;
    for(let price of arr){
        if(price<min){
            min=price;
        }else{
            max=Math.max(max,price-min)
        }
    }
    return max
}
console.log(bestTimeToSell([7, 1, 5, 3, 6, 4]))