function subsetXOR(nums: number[]): number {
  let xor: number = 0;
  nums.forEach((num) => {
    xor = xor ^ num;
  });

  return xor;
}

// Removing elements
// function sumSubsets(nums: number[], index: number, remove: boolean): number {
//   let subset: number[] = [...nums];
//   if (remove) {
//     subset.splice(index, 1);
//   } else {
//     index++;
//   }

//   if (index + 1 > subset.length) {
//     return subsetXOR(subset);
//   }

//   return sumSubsets(subset, index, true) + sumSubsets(subset, index, false);
// }

// function subsetXORSum(nums: number[]): number {
//   return sumSubsets(nums, -1, false);
// }

// Adding elements
function sumSubsets(
  nums: number[],
  subset: number[],
  index: number,
  include: boolean
): number {
  subset = [...subset];
  if (include) {
    subset.push(nums[index]);
  }
  index++;

  if (index + 1 > nums.length) {
    return subsetXOR(subset);
  }

  return (
    sumSubsets(nums, subset, index, true) +
    sumSubsets(nums, subset, index, false)
  );
}

function subsetXORSum(nums: number[]): number {
  return sumSubsets(nums, [], 0, false) + sumSubsets(nums, [], 0, true);
}

// Exemplo 1
console.log(subsetXORSum([1, 3]));

// Exemplo 2
console.log(subsetXORSum([5, 1, 6]));

// Exemplo 3
console.log(subsetXORSum([3, 4, 5, 6, 7, 8]));
