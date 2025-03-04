// function rearrangeArray(nums: number[]): number[] {
//   let positive: number[] = [];
//   let negative: number[] = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) {
//       positive.push(nums[i]);
//     } else {
//       negative.push(nums[i]);
//     }
//   }

//   let rearranged: number[] = [];
//   for (let i = 0; i < nums.length / 2; i++) {
//     rearranged.push(positive[i], negative[i]);
//   }

//   return rearranged;
// }

function rearrangeArray(nums: number[]): number[] {
  let rearranged: number[] = [];
  let i: number = 0;
  let j: number = 0;

  while (i < nums.length && j < nums.length) {
    while (nums[i] < 0) {
      i++;
    }

    while (nums[j] > 0) {
      j++;
    }
    
    rearranged.push(nums[i], nums[j]);
    i++;
    j++;
  }

  return rearranged;
}

// Example 1
console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));

// Example 2
console.log(rearrangeArray([-1, 1]));
