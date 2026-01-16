function nonRepeatedStr(str){
    if(str.length===0){
        return ""
    }
    for(let i=0;i<str.length;i++){
        let reaptChar=false;
        for(let j=0;j<str.length;j++){
       
            if(i!==j && str[i]==str[j]){
                reaptChar=true;
            }
        }
        if(!reaptChar){
            return str[i]
        }
    }
}

console.log(nonRepeatedStr("aab"))