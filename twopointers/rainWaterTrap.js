function rainWater(height){
    let heightleft=[];
    let heightRight=[];

    let maxLeft=0;
    let maxRight=0;

    let trapWater=0;

    for(let i=0;i<height.length;i++){
        if(height[i]>maxLeft){
            maxLeft=height[i]
            heightleft.push(maxLeft)
        }else{
            heightleft.push(maxLeft)
        }
    }

      for(let i=height.length-1;i>=0;i--){
        if(height[i]>maxRight){
            maxRight=height[i]
            heightRight[i]=maxRight
        }else{
            heightRight[i]=maxRight
        }
    }
   
    for(let i=0;i<height.length;i++){
        let min=Math.min(heightRight[i],heightleft[i])
        // console.log(min)
        trapWater=trapWater+min-height[i]
    }
    console.log(heightleft,heightRight)
    return trapWater
   

}

console.log(rainWater([4,2,0,3,2,5]))

function rainWater(height) {
    let heightleft = [];
    let heightRight = [];
    let trapWater = 0;
    heightleft[0] = height[0]
    let lastEle=height.length - 1;
    heightRight[lastEle] = height[lastEle]

    for (let i = 1; i < height.length; i++) {
        heightleft[i] = Math.max(heightleft[i - 1], height[i])
        heightRight[lastEle-i]=  Math.max(heightRight[lastEle-i+1], height[lastEle-i])
    }
    for (let i = 0; i < height.length; i++) {
        let min = Math.min(heightRight[i], heightleft[i])
        trapWater = trapWater + min - height[i]
    }
    return trapWater

}

console.log(rainWater([4, 2, 0, 3, 2, 5]))