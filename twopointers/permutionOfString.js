// function perMutationOfString(str1, str2) {
//     let conCatStr = "";
//     for (let i = 0; i < str2.length; i++) {
//         if (str1.includes(str2[i])) {
//             conCatStr = conCatStr + str2[i]
//             if (conCatStr.length === str1.length) {
//                 return true;
//             }
//         }else{
//             conCatStr=""
//         }
//     }
//     return false;
// }



// let str ="eidbaooo"
// let str2="ab"

// console.log(perMutationOfString(str2,str))


// function bacjSpacOneStr(str){
//     let concatStr="";
//     let j=0;
//     for(let i=0;i<str.length;i++){
//         if(arr[i]=="#"){
//             concatStr[j-1]="";
//             j--;


//         }else{
//         concatStr=concatStr+str[i]
//            j++;
//         }
     
//     }
    
// }

// bacjSpacOneStr("ab##")

function permutationStr(str){
    for(let i=0;i<str.length-2;i++){
        let concatStr=str[i]+str[i+1]+str[i+2]
        let arrElemet=concatStr.split("")
       const result= allElementsFound(str.split(""),arrElemet)
      if(result){ 
        return true
      }

    }
}



function allElementsFound(subsetArray, supersetArray) {
  // Check if every element in the 'subsetArray' is included in the 'supersetArray'
  return subsetArray.every(element => supersetArray.includes(element));
}



function permutionOfstr(str1, str2) {
  let hashOfstr1 = new Array(26).fill(0);
  let hashOfStr2 = new Array(26).fill(0);
  for(let i=0;i<str1.length;i++){
    hashOfstr1[str1.charCodeAt(i)-97]++;
    hashOfStr2[str2.charCodeAt(i)-97]++;
  }

  let i=0;
  let j=str1.length-1;
  while(j<str2.length){
    if(isValidPermutation(hashOfStr2,hashOfstr1)){
      return true;
    }
    hashOfStr2[str2.charCodeAt(i)-97]--;
    i++;
    j++;
    if(j<str2.length){
    hashOfStr2[str2.charCodeAt(j)-97]++;
    }
  }
  return false;
}

function isValidPermutation(hastr1,hastr2){
  for(let i=0;i<26;i++){
    if(hastr1[i]!==hastr2[i]){
      return false;
    }
  }
  return true;
}