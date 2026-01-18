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
}
console.log(maxProfit([7,6,4,3,1]))
