function buildArray(nums: number[]): number[] {
  let ans: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }

  return ans;
}

// Example 1
console.log(buildArray([0, 2, 1, 5, 3, 4]));

// Example 2
console.log(buildArray([5, 0, 1, 2, 3, 4]));
