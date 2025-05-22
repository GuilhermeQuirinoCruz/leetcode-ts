function getSubsetOr(subset: number[]): number {
  if (subset.length == 0) {
    return 0;
  }
  
  return subset.reduce((acc, num) => {
    return acc | num;
  });
}

function getSubsets(
  nums: number[],
  subset: number[],
  index: number,
): number[][] {
  if (index == nums.length) {
    return [[...subset]];
  }

  let subsets: number[][] = [];

  subset = [...subset];

  subset.push(nums[index]);
  getSubsets(nums, subset, index + 1).forEach((subset)=>{
    subsets.push(subset);
  })

  subset.pop();
  getSubsets(nums, subset, index + 1).forEach((subset)=>{
    subsets.push(subset);
  })

  return subsets;
}

function countMaxOrSubsets(nums: number[]): number {
  const subsets: number[][] = getSubsets(nums, [], 0);

  let maxOr: number = 0;
  let maxOrSubsets: number = 0;

  subsets.forEach(subset => {
    let subsetOr = getSubsetOr(subset);
    if (subsetOr < maxOr) {
      return;
    }

    maxOrSubsets = subsetOr > maxOr ? 1 : maxOrSubsets + 1;
    maxOr = Math.max(maxOr, subsetOr);
  });

  return maxOrSubsets;
}

// Exemplo 1
console.log(countMaxOrSubsets([3, 1]));

// Exemplo 2
console.log(countMaxOrSubsets([2, 2, 2]));

// Exemplo 2
console.log(countMaxOrSubsets([3, 2, 1, 5]));
