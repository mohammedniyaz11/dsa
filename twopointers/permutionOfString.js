function perMutationOfString(str1, str2) {
    let conCatStr = "";
    for (let i = 0; i < str2.length; i++) {
        if (str1.includes(str2[i])) {
            conCatStr = conCatStr + str2[i]
            if (conCatStr.length === str1.length) {
                return true;
            }
        }else{
            conCatStr=""
        }
    }
    return false;
}



let str ="eidbaooo"
let str2="ab"

console.log(perMutationOfString(str2,str))


function bacjSpacOneStr(str){
    let concatStr="";
    let j=0;
    for(let i=0;i<str.length;i++){
        if(arr[i]=="#"){
            concatStr[j-1]="";
            j--;


        }else{
        concatStr=concatStr+str[i]
           j++;
        }
     
    }
    
}

bacjSpacOneStr("ab##")