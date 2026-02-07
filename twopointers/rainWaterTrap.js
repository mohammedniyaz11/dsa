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