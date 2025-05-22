function findMiddleIndex(arr: number[], target: number) {
  let left: number = 0;
  let right: number = arr.length - 1;
  let middle: number = 0;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (arr[middle] == target) {
      return middle;
    } else if (arr[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

function targetIndices(nums: number[], target: number): number[] {
  let indices: number[] = [];

  nums.sort((a, b) => {
    return a - b;
  });

  const middleIndex: number = findMiddleIndex(nums, target);
  if (middleIndex == -1) {
    return [];
  }

  for (let i = middleIndex; i < nums.length && nums[i] == target; i++) {
    indices.push(i);
  }

  for (let i = middleIndex - 1; i >= 0 && nums[i] == target; i--) {
    indices.push(i);
  }

  return indices.sort((a, b) => {
    return a - b;
  });
}

// Example 1
console.log(targetIndices([1, 2, 5, 2, 3], 2));

// Example 2
console.log(targetIndices([1, 2, 5, 2, 3], 3));

// Example 3
console.log(targetIndices([1, 2, 5, 2, 3], 5));

// Example 4
console.log(targetIndices([1, 2, 5, 2, 3], 4));

// Example 5
console.log(
  targetIndices(
    [
      81, 7, 87, 77, 45, 70, 4, 20, 41, 8, 74, 88, 71, 28, 74, 41, 12, 16, 99,
      13, 69, 34, 57, 74, 76, 88, 15, 1, 64, 10, 28, 89, 25, 12, 7, 69, 81, 39,
      58, 79, 28, 27, 7, 87, 1, 66, 50, 93, 30, 76, 34, 22, 20, 89, 35, 42, 90,
      22, 54, 50, 10, 20, 24, 44, 87,
    ],
    1
  )
);
