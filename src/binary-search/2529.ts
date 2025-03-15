function findZeroIndex(nums: number[]): number {
  let l: number = 0;
  let r: number = nums.length - 1;
  let m: number = 0;
  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (nums[m] == 0) {
      return m;
    } else if (nums[m] > 0) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return -1;
}

function maximumCount(nums: number[]): number {
  let negative: number = 0;
  let positive: number = 0;
  let leftmostPositive: number = 0;

  const zeroIndex: number = findZeroIndex(nums);

  leftmostPositive = zeroIndex + 1;
  while (nums[leftmostPositive] <= 0 && leftmostPositive < nums.length) {
    leftmostPositive++;
  }

  if (zeroIndex != -1) {
    let rightmostNegative: number = zeroIndex - 1;
    while (rightmostNegative >= 0 && nums[rightmostNegative] == 0) {
      rightmostNegative--;
    }

    negative = rightmostNegative + 1;
  } else {
    negative = leftmostPositive;
  }

  positive = nums.length - leftmostPositive;

  return Math.max(negative, positive);
}

// Example 1
// console.log(maximumCount([-2, -1, -1, 1, 2, 3]));

// // Example 2
// console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));

// Example 3
console.log(maximumCount([5, 20, 66, 1314]));

// Example 4
console.log(maximumCount([-50, -20, -6, -1]));

// Example 5
console.log(maximumCount([-2, -1, 0, 1, 2, 3]));
