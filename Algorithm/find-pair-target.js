nums = [5, 2, 6, 8, 1, 9]
target = 12;

let result=[];

for(let i=0; i < nums.length -1; i++) {

    for(let j = i + 1; j <nums.length; j++) {

      if(nums[i] + nums[j] == target) {
       
        result.push(nums[i] , nums[j]);
        
      }
      
    }
}

console.log(result)



