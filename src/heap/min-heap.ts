import Heap from "./heap";

class MinHeap extends Heap {
  insert(element: number) {
    this.elements.push(element);
    this.heapifyUp(this.elements.length - 1);
  }

  heapifyUp(i: number) {
    let elements: number[] = this.elements;

    while (i > 0) {
      const parentIndex: number = this.parent(i);
      if (elements[parentIndex] < elements[i]) {
        break;
      }

      this.swap(i, parentIndex);
      i = parentIndex;
    }
  }

  heapifyDown(i: number) {
    let elements: number[] = this.elements;
    let size: number = elements.length;
    if (size == 1) {
      return;
    }

    let left: number = this.left(i);
    let right: number = this.right(i);
    let smallest: number = i;

    if (left < size && elements[left] < elements[smallest]) {
      smallest = left;
    }

    if (right < size && elements[right] < elements[smallest]) {
      smallest = right;
    }

    if (i != smallest) {
      this.swap(i, smallest);
      this.heapifyDown(smallest);
    }
  }

  extract(): number {
    let elements: number[] = this.elements;
    if (elements.length <= 1) {
      return elements.pop() ?? 0;
    }

    let min: number = this.peek();

    this.swap(0, elements.length - 1);
    elements.pop();
    this.heapifyDown(0);

    return min;
  }
}

export default MinHeap;