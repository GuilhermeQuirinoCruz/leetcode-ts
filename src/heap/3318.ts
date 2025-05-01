class MaxHeap {
  elements: number[][];

  constructor(elements: number[][] = []) {
    this.elements = [];

    for (const element of elements) {
      this.insert(element);
    }
  }

  parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  left(index: number): number {
    return 2 * index + 1;
  }

  right(index: number): number {
    return 2 * index + 2;
  }

  swap(i1: number, i2: number) {
    let elements: number[][] = this.elements;
    [elements[i1], elements[i2]] = [elements[i2], elements[i1]];
  }

  peek(): number[] {
    return this.elements[0];
  }

  size() {
    return this.elements.length;
  }

  insert(element: number[]) {
    this.elements.push(element);
    this.heapifyUp(this.elements.length - 1);
  }

  isLarger(i1: number, i2: number): boolean {
    let elements: number[][] = this.elements;

    if (elements[i1][0] > elements[i2][0]) {
      return true;
    }

    return (
      elements[i1][0] == elements[i2][0] && elements[i1][1] > elements[i2][1]
    );
  }

  heapifyUp(i: number) {
    let elements: number[][] = this.elements;

    while (i > 0) {
      const parentIndex: number = this.parent(i);
      if (this.isLarger(parentIndex, i)) {
        break;
      }

      this.swap(i, parentIndex);
      i = parentIndex;
    }
  }

  heapifyDown(i: number) {
    let elements: number[][] = this.elements;
    let size: number = elements.length;
    if (size == 1) {
      return;
    }

    let left: number = this.left(i);
    let right: number = this.right(i);
    let largest: number = i;

    if (left < size && this.isLarger(left, largest)) {
      largest = left;
    }

    if (right < size && this.isLarger(right, largest)) {
      largest = right;
    }

    if (i != largest) {
      this.swap(i, largest);
      this.heapifyDown(largest);
    }
  }

  extract(): number[] {
    let elements: number[][] = this.elements;
    if (elements.length == 1) {
      return elements.pop() || [] || [0, 0];
    }

    let max: number[] = this.peek();

    this.swap(0, elements.length - 1);
    elements.pop();
    this.heapifyDown(0);

    return max;
  }
}

function sum(nums: number[]): number {
  return nums.reduce((acc, curr) => acc + curr);
}

function getFrequencies(arr: number[]): Map<number, number> {
  let frequency: Map<number, number> = new Map<number, number>();
  for (const n of arr) {
    frequency.set(n, (frequency.get(n) || 0) + 1);
  }

  return frequency;
}

function findXSum(nums: number[], k: number, x: number): number[] {
  let sums: number[] = [];

  for (let i = 0; i + k <= nums.length; i++) {
    const frequencies: Map<number, number> = getFrequencies(
      nums.slice(i, i + k)
    );
    let heap: MaxHeap = new MaxHeap();
    for (const frequency of frequencies) {
      heap.insert([frequency[1], frequency[0]]);
    }

    let distinct: number = x;
    let xSum: number[] = [];
    while (distinct > 0 && heap.size() > 0) {
      const mostFrequent: number[] = heap.extract();
      xSum.push(mostFrequent[0] * mostFrequent[1]);
      distinct--;
    }

    sums.push(sum(xSum));
  }

  return sums;
}

// Example 1
console.log(findXSum([1, 1, 2, 2, 3, 4, 2, 3], 6, 2));

// Example 2
console.log(findXSum([3, 8, 7, 8, 7, 5], 2, 2));
