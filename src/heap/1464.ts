import MaxHeap from "./max-heap";

// Using a simple for loop
// function maxProduct(nums: number[]): number {
//   let largest: number = 0;
//   let secondLargest: number = 0;

//   for (const num of nums) {
//     if (num >= largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if (num > secondLargest) {
//       secondLargest = num;
//     }
//   }

//   return (largest - 1) * (secondLargest - 1);
// }

// Using a heap
function maxProduct(nums: number[]): number {
  let numsHeap: MaxHeap = new MaxHeap(nums);
  let largest: number = numsHeap.extract();
  let secondLargest: number = numsHeap.extract();

  return (largest - 1) * (secondLargest - 1);
}

// Example 1
console.log(maxProduct([3, 4, 5, 2]));

// Example 2
console.log(maxProduct([1, 5, 4, 5]));

// Example 3
console.log(maxProduct([3, 7]));

// Example 4
console.log(maxProduct([10, 2, 5, 2]));
