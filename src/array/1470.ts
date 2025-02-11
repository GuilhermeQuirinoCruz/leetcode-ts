function shuffle(nums: number[], n: number): number[] {
  let shuffled: number[] = [];

  for (let i = 0; i < n; i++) {
    shuffled.push(nums[i], nums[i + n]);
  }

  return shuffled;
}

// Example 1
console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

// Example 2
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));

// Example 3
console.log(shuffle([1, 2, 1, 2], 2));
