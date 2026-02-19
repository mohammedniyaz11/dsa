function longestSub(s) {
    let mpped = new Map();
    let left = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        let char=s[i]
        mpped.set(char, (mpped.get(char) || 0) + 1)
        while (mpped.size > 2) {
            mpped.set(s[left],mpped.get(s[left])-1)
            if(mpped.get(s[left])==0){
                mpped.delete(s[left])
            }
            left++;
        }
        max=Math.max(max,i-left+1)
    }
}
longestSub("eceba")

