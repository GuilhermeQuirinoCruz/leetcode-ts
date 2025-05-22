function minimumOperations(nums: number[]): number {
  let min: number = 0;

  nums.forEach(num => {
    min += num % 3 == 0 ? 0 : 1;
  });

  return min;
}

// Example 1
console.log(minimumOperations([1, 2, 3, 4]));

// Example 2
console.log(minimumOperations([3, 6, 9]));
