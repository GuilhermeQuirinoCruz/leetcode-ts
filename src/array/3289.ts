function getSneakyNumbers(nums: number[]): number[] {
  let sneakyNumbers: number[] = [];

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        sneakyNumbers.push(nums[i]);
      }
    }
  }

  return sneakyNumbers;
}

// Example 1
console.log(getSneakyNumbers([0, 1, 1, 0]));

// Example 2
console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2]));

// Example 3
console.log(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]));
