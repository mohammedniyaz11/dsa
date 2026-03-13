/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let obj={};
  for(let i=0;i<strs.length;i++){
   let char=strs[i];
   let sortchar=char.split("").sort().join('')
   if(obj[sortchar]){
    let res=obj[sortchar]
    res.push(char)
      obj[sortchar]=res;
   }else{
    obj[sortchar]=[char]
   }
  }
  return Object.values(obj)
};