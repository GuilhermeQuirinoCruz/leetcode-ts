function minimumAverage(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let minAverage: number = nums[nums.length - 1];

  // N / 2
  const n2: number = nums.length / 2;
  for (let i = 0; i < n2; i++) {
    const minElement: number = nums[0];
    const maxElement: number = nums[nums.length - 1];
    const average = (minElement + maxElement) / 2;
    
    minAverage = average < minAverage ? average : minAverage;
    nums = nums.slice(1, nums.length - 1);
  }

  return minAverage;
}

// Example 1
console.log(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1]));

// Example 2
console.log(minimumAverage([1, 9, 8, 3, 10, 5]));

// Example 3
console.log(minimumAverage([1,2,3,7,8,9]));

