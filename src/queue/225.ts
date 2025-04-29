class MyStack {
  elements: number[];

  constructor() {
    this.elements = [];
  }

  push(x: number): void {
    this.elements.unshift(x);
  }

  pop(): number {
    return this.elements.shift() || 0;
  }

  top(): number {
    return this.elements[0];
  }

  empty(): boolean {
    return this.elements.length == 0;
  }
}

// Example 1
const myStack: MyStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top()); // return 2
console.log(myStack.pop()); // return 2
console.log(myStack.empty()); // return False
