/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let map = new Map();
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
        if (map.size == 2) {
            let mpValues = [...map.values()]
            if (mpValues[0] === mpValues[1]) {
                count++;
                map = new Map();

            }


        }
    }
    return count;




};


/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count=0;
    let rCount=0;
    let lCount=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=='R'){
            rCount++;
        }else{
           lCount++; 
        }
        if(rCount===lCount){
            count++;
            rCount=0;
            lCount=0
        }
    }
    return count;
};

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let temp=0;
  let count=0;
  for(let i=0;i<s.length;i++){
    if(s[i]==="R"){
        temp++;
    }else{
        temp--;
    }
    if(temp==0){
        count++;
    }
  }
  return count;  
};


