import MaxHeap from "./max-heap";

function sumGifts(gifts: number[]): number {
  return gifts.reduce((acc, curr) => acc + curr);
}

function pickGifts(gifts: number[], k: number): number {
  let giftHeap: MaxHeap = new MaxHeap(gifts);

  while (k > 0) {
    giftHeap.insert(Math.floor(Math.sqrt(giftHeap.extract())));
    k--;
  }

  return sumGifts(giftHeap.elements);
}

// Example 1
console.log(pickGifts([25, 64, 9, 4, 100], 4));

// Example 2
console.log(pickGifts([1, 1, 1, 1], 4));
