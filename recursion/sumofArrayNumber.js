function sumofArrayNumbers(arr,index) {
    if(index==arr.length){
        return arr[0];
    }
    return arr[index]+sumofArrayNumbers(arr,index+1)
    

}

console.log(sumofArrayNumbers([1,2,3,4,5],0))