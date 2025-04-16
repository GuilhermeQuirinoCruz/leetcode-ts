function minimumCost(cost: number[]): number {
  cost.sort((a, b) => {
    return b - a;
  });

  let totalCost: number = 0;
  for (let i = 0; i < cost.length; i++) {
    if ((i + 1) % 3 == 0) {
      continue;
    }

    totalCost += cost[i];
  }

  return totalCost;
}

// Example 1
console.log(minimumCost([1, 2, 3]));

// Example 2
console.log(minimumCost([6, 5, 7, 9, 2, 2]));

// Example 3
console.log(minimumCost([5, 5]));