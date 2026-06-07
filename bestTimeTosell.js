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


 
var maxProfit = function(prices) {
    let minVal=Infinity;
    let maxProfit=0;
    for(let price of prices){
        if(price<minVal){
            minVal=price;

        }else if(price>minVal){
            maxProfit=maxProfit+(price-minVal)
            minVal=price;

        }
    }
    return maxProfit;
    
};



/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit = maxProfit + prices[i] - prices[i - 1]
        }
    }
    return maxProfit
};