function isDistant(num: number, compare: number[], minAbsDiff: number) {
  let l: number = 0;
  let r: number = compare.length - 1;
  let m: number = 0;
  let diff: number = 0;

  while (l <= r) {
    m = Math.floor((l + r) / 2);

    diff = num - compare[m];
    if (Math.abs(diff) <= minAbsDiff) {
      return true;
    }

    if (diff > 0) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return false;
}

function findTheDistanceValue(
  arr1: number[],
  arr2: number[],
  d: number
): number {
  let distance: number = 0;

  arr2.sort((a, b) => {
    return a - b;
  });

  arr1.forEach((n: number) => {
    distance += !isDistant(n, arr2, d) ? 1 : 0;
  });

  return distance;
}

// Example 1
console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2));

// Example 2
console.log(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3));

// Example 3
console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6));

// Example 4
console.log(
  findTheDistanceValue(
    [
      -803, 715, -224, 909, 121, -296, 872, 807, 715, 407, 94, -8, 572, 90,
      -520, -867, 485, -918, -827, -728, -653, -659, 865, 102, -564, -452, 554,
      -320, 229, 36, 722, -478, -247, -307, -304, -767, -404, -519, 776, 933,
      236, 596, 954, 464,
    ],
    [
      817, 1, -723, 187, 128, 577, -787, -344, -920, -168, -851, -222, 773, 614,
      -699, 696, -744, -302, -766, 259, 203, 601, 896, -226, -844, 168, 126,
      -542, 159, -833, 950, -454, -253, 824, -395, 155, 94, 894, -766, -63, 836,
      -433, -780, 611, -907, 695, -395, -975, 256, 373, -971, -813, -154, -765,
      691, 812, 617, -919, -616, -510, 608, 201, -138, -669, -764, -77, -658,
      394, -506, -675, 523, 730, -790, -109, 865, 975, -226, 651, 987, 111, 862,
      675, -398, 126, -482, 457, -24, -356, -795, -575, 335, -350, -919, -945,
      -979, 611,
    ],
    37
  )
);
