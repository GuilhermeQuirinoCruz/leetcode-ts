function arithmeticTriplets(nums: number[], diff: number): number {
  let arithmeticTripletsCount: number = 0;

  let i: number,
    j: number,
    k: number;

  for (i = 0; i < nums.length - 2; i++) {
    for (j = i + 1; j < nums.length - 1; j++) {
      if (nums[j] - nums[i] > diff) {
        break;
      }

      if (nums[j] - nums[i] < diff) {
        continue;
      }

      for (k = j + 1; k < nums.length; k++) {
        if (nums[k] - nums[j] > diff) {
          break;
        }
  
        if (nums[k] - nums[j] < diff) {
          continue;
        }

        arithmeticTripletsCount++;
      }
    }
  }

  return arithmeticTripletsCount;
}

// Example 1
console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));

// Example 2
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2));
