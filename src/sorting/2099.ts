function maxSubsequence(nums: number[], k: number): number[] {
  return nums
    .map((num, i) => {
      return [i, num];
    })
    .sort((n1, n2) => {
      return n2[1] - n1[1];
    })
    .slice(0, k)
    .sort((n1, n2) => {
      return n1[0] - n2[0];
    })
    .map((num) => {
      return num[1];
    });
}

// Example 1
console.log(maxSubsequence([2, 1, 3, 3], 2));

// Example 2
console.log(maxSubsequence([-1, -2, 3, 4], 3));

// Example 3
console.log(maxSubsequence([3, 4, 3, 3], 2));
