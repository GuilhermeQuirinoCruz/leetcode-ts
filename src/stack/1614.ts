function maxDepth(s: string): number {
  let depth: number = 0;
  let maxDepth: number = 0;

  for (const character of s) {
    if (character == "(") {
      depth += 1;
      maxDepth = Math.max(depth, maxDepth);
    } else if (character == ")") {
      depth -= 1;
    }
  }

  return maxDepth;
}

// Example 1
console.log(maxDepth("(1+(2*3)+((8)/4))+1"));

// Example 1
console.log(maxDepth("(1)+((2))+(((3)))"));

// Example 1
console.log(maxDepth("()(())((()()))"));
