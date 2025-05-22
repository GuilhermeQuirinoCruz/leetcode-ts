function climbStairs(n: number): number {
  let fromStep: Map<number, number> = new Map<number, number>();

  for (let i = 2; i <= n; i++) {
    let ways: number = (fromStep.get(i - 1) || 1) + (fromStep.get(i - 2) || 1);
    fromStep.set(i, ways);
  }

  return fromStep.get(n) || 1;
}

// Example 1
console.log(climbStairs(2));

// Example 2
console.log(climbStairs(3));

// Example 3
console.log(climbStairs(5));
