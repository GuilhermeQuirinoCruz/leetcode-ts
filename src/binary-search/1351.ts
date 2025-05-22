function findLeftmostNegative(arr: number[]): number {
  let left: number = 0;
  let right: number = arr.length;
  let middle: number = 0;
  while (left != right) {
    middle = Math.floor((left + right) / 2);
    if (arr[middle] < 0) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return arr[left] < 0 ? left : -1;
}

function countNegatives(grid: number[][]): number {
  let negatives: number = 0;
  let leftmostIndex: number = grid[0].length;

  let i: number = 0;
  for (i = 0; i < grid.length; i++) {
    if (leftmostIndex < 0) {
      leftmostIndex = grid.length;
    }

    leftmostIndex = findLeftmostNegative(grid[i].slice(0, leftmostIndex));
    if (leftmostIndex > 0) {
      negatives += grid[i].length - leftmostIndex;
      leftmostIndex++;
    } else if (leftmostIndex == 0) {
      break;
    }
  }

  let remainingLines: number = grid.length - i;
  if (remainingLines > 0) {
    let remainingNegatives: number = remainingLines * grid[i].length;
    negatives += remainingNegatives;
  }

  return negatives;
}

// Example 1
console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);

// Example 2
console.log(
  countNegatives([
    [3, 2],
    [1, 0],
  ])
);

// Example 3
console.log(
  countNegatives([
    [5, 1, 0],
    [-5, -5, -5],
  ])
);

// Example 4
console.log(countNegatives([[10]]));
