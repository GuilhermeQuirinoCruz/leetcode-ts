function isSorted(nums: number[]) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return false;
    }
  }

  return true;
}

function minimumPairRemoval(nums: number[]): number {
  if (nums.length == 1) {
    return 0;
  }

  let operations: number = 0;
  while (true) {
    if (isSorted(nums)) {
      break;
    }

    let pairIndex: number[] = [0, 1];
    let minSum: number = nums[0] + nums[1];
    for (let i = 1; i < nums.length - 1; i++) {
      const sum: number = nums[i] + nums[i + 1];
      if (sum < minSum) {
        minSum = sum;
        pairIndex = [i, i + 1];
      }
    }

    nums[pairIndex[0]] = minSum;
    nums.splice(pairIndex[1], 1);

    operations++;
  }

  return operations;
}

// Exemplo 1
console.log(minimumPairRemoval([5, 2, 3, 1]));

// Exemplo 2
// console.log(minimumPairRemoval([1, 2, 2]));
