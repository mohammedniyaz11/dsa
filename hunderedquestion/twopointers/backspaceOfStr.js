function backspaceSingeStr(str){
   let strArr=[]
   for(let i=0;i<str.length;i++){
    if(str[i]=="#"){
        strArr.pop()
    }else{
        strArr.push(str[i])
    }
   }
   return strArr.join(" ")

}

console.log(backspaceSingeStr("abds##"))