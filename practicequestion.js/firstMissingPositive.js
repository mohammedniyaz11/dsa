function firstMissingPositive(nums) {
  // Your code here
  const sortInteger = nums.sort((a, b) => a - b)
  let biggerNumber = sortInteger[nums.length - 1]
  for (let i = 1; i <= biggerNumber; i++){
    if (!nums.includes(i)) {
      return i;
    }
    
  }
}

console.log(firstMissingPositive([]))