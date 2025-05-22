class MyQueue {
  elements: number[];

  constructor() {
    this.elements = [];
  }

  push(x: number): void {
    this.elements.push(x);
  }

  pop(): number {
    let front: number = this.elements[0];

    this.elements = this.elements.slice(1);

    return front;
  }

  peek(): number {
    return this.elements[0];
  }

  empty(): boolean {
    return this.elements.length == 0;
  }
}

// Example 1
const myQueue: MyQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue.peek()); // return 1
console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue.empty()); // return false