function getConcatenation(nums: number[]): number[] {
  // Shorter solution
  const ans: number[] = nums.concat(nums);

  // Default solution
  // let ans: number[] = [];
  // ans.length = nums.length * 2;
  // for (let i = 0; i < nums.length * 2; i++) {
  //     ans[i] = (nums[i % nums.length]);
  // }

  return ans;
}

// Example 1
console.log(getConcatenation([1, 2, 1]));

// Example 2
console.log(getConcatenation([1, 3, 2, 1]));
