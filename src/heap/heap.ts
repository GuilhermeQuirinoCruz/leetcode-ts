interface IHeap {
  elements: number[];

  parent(index: number): number;
  left(index: number): number;
  right(index: number): number;
  swap(i1: number, i2: number);

  insert(element: number);
  extract(): number;

  heapifyUp(i: number);
  heapifyDown(i: number);

  size();
  print();
}

class Heap implements IHeap {
  elements: number[];

  constructor(elements: number[] = []) {
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
    let elements: number[] = this.elements;
    [elements[i1], elements[i2]] = [elements[i2], elements[i1]];
  }

  peek(): number {
    return this.elements[0];
  }

  size() {
    return this.elements.length;
  }

  insert(element: number) {
    throw new Error("Method not implemented.");
  }

  extract(): number {
    throw new Error("Method not implemented.");
  }

  heapifyUp(i: number) {
    throw new Error("Method not implemented.");
  }

  heapifyDown(i: number) {
    throw new Error("Method not implemented.");
  }

  print() {
    console.log(this.elements);
  }

  printTree() {
    if (this.elements.length == 0) {
      return;
    }

    let leftmost: number = 0;
    let rightmost: number = 1;

    while (leftmost < this.elements.length) {
      console.log(
        this.elements.slice(leftmost, Math.min(rightmost, this.elements.length))
      );

      leftmost = rightmost;
      rightmost = rightmost * 2 + 1;
    }
  }
}

export default Heap;
