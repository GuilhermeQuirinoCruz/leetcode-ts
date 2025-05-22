function containsDuplicate(nums: number[]): boolean {
  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      return true;
    }
  }

  return false;
}

// Example 1
console.log(containsDuplicate([1, 2, 3, 1]));

// Example 2
console.log(containsDuplicate([1, 2, 3, 4]));

// Example 3
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
