function finalValueAfterOperations(operations: string[]): number {
  let x: number = 0;

  operations.forEach((operation) => {
    // Using a ternary expression
    x += operation.includes("+") ? 1 : -1;

    // Using a stardard if statement
    // if (operation.includes('+')) {
    //     x++;
    // } else {
    //     x--;
    // }
  });

  return x;
}

// Example 1
console.log(finalValueAfterOperations(["--X", "X++", "X++"]));

// Example 2
console.log(finalValueAfterOperations(["++X", "++X", "X++"]));

// Example 3
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]));
