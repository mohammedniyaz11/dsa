function powerOfTwo(n){
    if(n==0){
        return false;
    }
    while(n>0){
        if(n%2!==0 && n!==1){
            return false;
        }
        n=Math.floor(n/2)
    }
    return true;
}

console.log(powerOfTwo(16))

function powerOfTwoRecursiionWay(n){
    if(n<=0){
        return false
    }
    if(n==1){
        return true;
    }
    if(n%2!==0){
        return false;
    }
   
    return powerOfTwoRecursiionWay(Math.floor(n/2))
}

// console.log(powerOfTwoRecursiionWay(4))


function mazePath(r, c, path = "") {
  if (r === 1 && c === 1) {
    console.log(path);
    return;
  }
  if (r === 0 || c === 0) return;

  mazePath(r, c - 1, path + "R");
  mazePath(r - 1, c, path + "D");
}
   


