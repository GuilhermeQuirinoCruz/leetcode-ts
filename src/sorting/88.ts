function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let current: number = m + n - 1;
  m--;
  n--;

  while (current >= 0) {
    let largest: number = 0;

    if (n < 0 || nums1[m] >= nums2[n]) {
      largest = nums1[m];
      m--;
    } else {
      largest = nums2[n];
      n--;
    }

    nums1[current] = largest;

    current--;
  }

  // console.log(nums1);
}

// Example 1
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

// Example 2
merge([1], 1, [], 0);

// Example 3
merge([0], 0, [1], 1);

// Example 4
merge([1, 3, 5, 0, 0], 3, [2, 4], 2);