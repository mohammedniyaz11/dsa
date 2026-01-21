function letPalidromeArr(arr){
     for(let i=0;i<arr.length/2;i++){
        let charFirst=arr[i];
        let charLast=arr[arr.length-i-1];
        if(charFirst !== charLast){
            return false
        }
}
return true
}

console.log(letPalidromeArr([1,2]))