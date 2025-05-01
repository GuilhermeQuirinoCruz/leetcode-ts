import Heap from "./heap";

class MaxHeap extends Heap {
  insert(element: number) {
    this.elements.push(element);
    this.heapifyUp(this.elements.length - 1);
  }

  heapifyUp(i: number) {
    let elements: number[] = this.elements;

    while (i > 0) {
      const parentIndex: number = this.parent(i);
      if (elements[parentIndex] > elements[i]) {
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
    let largest: number = i;

    if (left < size && elements[left] > elements[largest]) {
      largest = left;
    }

    if (right < size && elements[right] > elements[largest]) {
      largest = right;
    }

    if (i != largest) {
      this.swap(i, largest);
      this.heapifyDown(largest);
    }
  }

  extract(): number {
    let elements: number[] = this.elements;
    if (elements.length <= 1) {
      return elements.pop() ?? 0;
    }

    let max: number = this.peek();

    this.swap(0, elements.length - 1);
    elements.pop();
    this.heapifyDown(0);

    return max;
  }
}

export default MaxHeap;