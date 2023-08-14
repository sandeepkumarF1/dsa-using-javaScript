// 1st Method
var twoSum = function(nums, target) {
    for(let i=0 ; i<=nums.length; i++){
        for(let j=i+1; j<=nums.length; j++){
            if(nums[i]+nums[j]===target){

                // console.log(nums[i], nums[j])

                return [i,j];
            }
            
            // console.log(i,nums[i], j, nums[j])
        }
    }
};
const output = twoSum([2,5,5,11], 10);
console.log(output);