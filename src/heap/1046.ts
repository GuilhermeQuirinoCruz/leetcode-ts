import MaxHeap from "./max-heap";

function lastStoneWeight(stones: number[]): number {
  let stonesHeap: MaxHeap = new MaxHeap(stones);
  while (stonesHeap.size() > 1) {
    const weight1: number = stonesHeap.extract();
    const weight2: number = stonesHeap.extract();

    if (weight1 != weight2) {
      stonesHeap.insert(weight1 - weight2);
    }
  }

  return stonesHeap.extract();
}

// Example 1
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));

// Example 2
console.log(lastStoneWeight([1]));

// Example 3
console.log(lastStoneWeight([5, 5]));
