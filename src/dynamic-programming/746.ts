class Attempt {
  step: number;
  totalCost: number;

  constructor(step: number, totalCost: number) {
    this.step = step;
    this.totalCost = totalCost;
  }
}

function minCostClimbingStairs(cost: number[]): number {
  cost.unshift(0);
  let attempts: Attempt[] = [new Attempt(0, 0)];
  let minCost: Map<number, number> = new Map<number, number>();
  let cycles: number = 0;

  while (cycles < cost.length) {
    const newAttempts: Attempt[] = [];
    for (const attempt of attempts) {
      const step: number = Math.min(attempt.step, cost.length);

      if (minCost.has(step) && minCost.get(step)! <= attempt.totalCost) {
        continue;
      }

      minCost.set(step, attempt.totalCost);

      if (step >= cost.length) {
        continue;
      }

      attempt.totalCost += cost[step];
      newAttempts.push(new Attempt(step + 1, attempt.totalCost));
      newAttempts.push(new Attempt(step + 2, attempt.totalCost));
    }

    attempts = [...newAttempts];
    cycles++;
  }

  return minCost.get(cost.length)!;
}

// Example 1
console.log(minCostClimbingStairs([10, 15, 20]));

// Example 2
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));

// Example 3
console.log(
  minCostClimbingStairs([
    841, 462, 566, 398, 243, 248, 238, 650, 989, 576, 361, 126, 334,
  ])
);

// Example 4
console.log(minCostClimbingStairs([0, 0, 0, 1]));
