import MinHeap from "./min-heap";

// Sorting and using a for loop
// function numberGame(nums: number[]): number[] {
//   let arr: number[] = [];

//   nums.sort((a, b) => {
//     return a - b;
//   });

//   // [0 1 2 3 4 5 6 7]

//   for (let i = 0; i < nums.length; i += 2) {
//     arr.push(nums[i + 1]);
//     arr.push(nums[i]);
//   }

//   return arr;
// }

// Using a min heap
function numberGame(nums: number[]): number[] {
  let arr: number[] = [];

  let numsHeap: MinHeap = new MinHeap(nums);
  while (numsHeap.size() > 0) {
    const alicesPick: number = numsHeap.extract();
    const bobsPick: number = numsHeap.extract();

    arr.push(bobsPick, alicesPick);
  }

  return arr;
}

// Example 1
console.log(numberGame([5, 4, 2, 3]));

// Example 2
console.log(numberGame([2, 5]));
