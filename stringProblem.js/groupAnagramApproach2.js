function groupAnagram(strs) {
    let map = {}
    for (let i = 0; i < strs.length; i++) {
        const freqArr = new Array(26).fill(0) 
        let s=strs[i]
        for(let j=0;j<s.length;j++){
           let index= s[j].charCodeAt() - 'a'.charCodeAt()
           freqArr[index]++;
        }

        
          let key = "";
          for (let k = 0; k < 26; k++) {
              key =key +freqArr;

          }
         if(map[key]){
           const getKey=map[key]
           getKey.push(s)
         }else{
            map[key]=[s]
         }  
  
    }
    return Object.values(map)


}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagram(strs))

