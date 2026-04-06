function nextGreaterEle(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        let found = false;

        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {

                // check all elements to the right
                for (let k = j + 1; k < arr2.length; k++) {
                    if (arr2[k] > arr1[i]) {
                        result.push(arr2[k]);
                        found = true;
                        break;
                    }
                }

                break;
            }
        }

        if (!found) {
            result.push(-1);
        }
    }

    return result;
}


function nextGreaterEle(arr1, arr2) {
    let stack = [];
    let map = new Map();
    for (let num of arr2) {
        while (stack.length && num > stack[stack.length - 1]) {
            map.set(stack.pop(), num)
        }
        stack.push(num)
    }

    while (stack.length) {
        map.set(stack.pop(), -1)
    }
    return arr1.map((ele)=>map.get(ele))
}


function nextGreaterEleprac(arr1,arr2){
    let  map=new Map();
    let stack=[]
    for(let i=0;i<arr2.length;i++){
        while(stack.length && arr2[i]>stack[stack.length-1]){
            map.set(stack.pop(),arr2[i])
        }
         stack.push(num)

        while(stack.length){
            map.set(stack.pop(),-1)
        }
    }
    return arr1.map((ele)=>map.get(ele))
}