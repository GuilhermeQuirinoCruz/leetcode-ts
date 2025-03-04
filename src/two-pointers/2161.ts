function pivotArray(nums: number[], pivot: number): number[] {
  let numsSmallerThanPivot: number[] = [];
  let numsEqualToPivot: number[] = [];
  let numsGreaterThanPivot: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      numsSmallerThanPivot.push(nums[i]);
      continue;
    }

    if (nums[i] > pivot) {
      numsGreaterThanPivot.push(nums[i]);
      continue;
    }

    numsEqualToPivot.push(nums[i]);
  }

  return numsSmallerThanPivot.concat(numsEqualToPivot, numsGreaterThanPivot);
}

// Example 1
console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));

// Example 2
console.log(pivotArray([-3, 4, 3, 2], 2));
