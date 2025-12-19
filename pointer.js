function removeDup(arr){
    if (arr.length === 0) return 0;

    let k = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[k] !== arr[i]) {
            k++;
            arr[k] = arr[i];
        }
    }
    return k + 1;
}


function removeElement(arr,removeEle){
    let k=0;
    for(let i=0;i<arr.length;i++ ){
        if(arr[i]!==removeEle){
            arr[k]=arr[i]
            k=k+1
        }
    }
    return arr.slice(0,k)

}