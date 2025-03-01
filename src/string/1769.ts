function minOperations(boxes: string): number[] {
  let operations: number[] = new Array<number>(boxes.length).fill(0);

  for (let i = 0; i < boxes.length - 1; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      let distance: number = j - i;
      if (boxes[i] == "1") {
        operations[j] += distance;
      }
      
      if (boxes[j] == "1") {
        operations[i] += distance;
      }
    }
  }

  return operations;
}

// Example 1
console.log(minOperations("110"));

// Example 2
console.log(minOperations("001011"));
