var getConcatenation = function (nums) {
  let ans = [];
  for(let i=0; i<nums.length; i++){
    ans[i] = nums[i];
  }
  return nums.concat(ans);
};

const output = getConcatenation([1, 2, 1]);
console.log(output);
