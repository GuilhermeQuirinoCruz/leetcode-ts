function minimumDifference(nums: number[], k: number): number {
  if (nums.length == 1) {
    return 0;
  }

  nums.sort((a, b) => {
    return a - b;
  });

  let minDifference: number = nums[nums.length - 1];
  for (let i = 0; i < nums.length - k + 1; i++) {
    minDifference = Math.min(minDifference, nums[i + k - 1] - nums[i]);
  }

  return minDifference;
}

// Example 1
console.log(minimumDifference([90], 1));

// Example 2
console.log(minimumDifference([9, 4, 1, 7], 2));

// Example 3
console.log(
  minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6)
);

