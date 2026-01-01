function reverse(str,rev,n){
   
    if(n<0){
        return rev
    }
    rev=rev+str[n]
 
    return reverse(str,rev,n-1)
}

// console.log(reverse("hello","",))
let str="hello";
console.log(reverse(str,"",str.length-1))