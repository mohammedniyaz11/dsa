function rev(str, n, revstr = "") {
    if(n==0){
        return revstr
    }
    n=n-1;
    revstr=revstr+str[n]
    return rev(str, n, revstr)
}
console.log(rev("abc",3,""))





