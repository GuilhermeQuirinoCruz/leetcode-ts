function numIdenticalPairs(nums: number[]): number {
  let goodPairs: number = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      goodPairs += nums[i] == nums[j] ? 1 : 0;

      // There is no need to check if i < j,
      // because it's always true in this loop
    }
  }

  return goodPairs;
}

// Example 1
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));

// Example 2
console.log(numIdenticalPairs([1, 1, 1, 1]));

// Example 3
console.log(numIdenticalPairs([1, 2, 3]));
