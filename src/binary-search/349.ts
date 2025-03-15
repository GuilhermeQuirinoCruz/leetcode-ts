// Using sets
function intersection(nums1: number[], nums2: number[]): number[] {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);

  // console.log(new Set<number>([...nums1Set].filter((x) => nums2Set.has(x))));
  // console.log([...nums1Set].filter((num) => nums2Set.has(num)));

  return [...nums1Set].filter((num) => nums2Set.has(num));
}

// Example 1
console.log(intersection([1, 2, 2, 1], [2, 2]));

// Example 2
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
