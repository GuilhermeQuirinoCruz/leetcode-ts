function majorityElement(nums: number[]): number {
  let numCount: Map<number, number> = new Map<number, number>();
  nums.forEach((num) => {
    numCount.set(num, (numCount.get(num) || 0) + 1);
  });

  const countNeeded: number = Math.ceil(nums.length / 2);
  for (let [num, count] of numCount) {
    if (count >= countNeeded) {
      return num;
    }
  }

  return 0;
}

// Example 1
console.log(majorityElement([3, 2, 3]));

// Example 2
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
