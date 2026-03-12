/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false
    }
    let map=new Map();
    for(let i=0;i<s.length;i++){
        let char=s[i];
        if(map.has(char)){
            map.set(char,map.get(char)+1);
        }else{
            map.set(char,1)
        }
    }
    for(let i=0;i<t.length;i++){
        if(!map.has(t[i]) || map.get(t[i])===0){
            return false;
        }else{
            map.set(t[i],map.get(t[i])-1)
        }
    }
    return true

};