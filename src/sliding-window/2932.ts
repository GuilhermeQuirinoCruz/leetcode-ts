function isStrongPair(x: number, y: number): boolean {
  return Math.abs(x - y) <= Math.min(x, y);
}

function maximumStrongPairXor(nums: number[]): number {
  let maximumXor: number = 0;

  for (let i = 0; i < nums.length; i++) {
    let x: number = nums[i];
    for (let j = i; j < nums.length; j++) {
      let y: number = nums[j];
      if (isStrongPair(x, y)) {
        maximumXor = Math.max(maximumXor, x ^ y)
      }
    }
  }

  return maximumXor;
}

// Example 1
console.log(maximumStrongPairXor([1, 2, 3, 4, 5]));

// Example 2
console.log(maximumStrongPairXor([10, 100]));

// Example 3
console.log(maximumStrongPairXor([5, 6, 25, 30]));