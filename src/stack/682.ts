function calPoints(operations: string[]): number {
  let scoreStack: number[] = [];

  for (const operation of operations) {
    switch (operation) {
      case "C":
        scoreStack.pop();
        break;
      case "D":
        const lastScore: number = scoreStack.pop() || 0;
        scoreStack.push(lastScore);
        scoreStack.push(lastScore * 2);
        break;
      case "+":
        const score1: number = scoreStack.pop() || 0;
        const score2: number = scoreStack.pop() || 0;

        scoreStack.push(score2);
        scoreStack.push(score1);
        scoreStack.push(score1 + score2);
        break;
      default:
        scoreStack.push(Number.parseInt(operation));
        break;
    }
  }

  return scoreStack.reduce((sum, score) => {
    return sum + score;
  }, 0);
}

// Example 1
console.log(calPoints(["5", "2", "C", "D", "+"]));

// Example 1
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));

// Example 1
console.log(calPoints(["1", "C"]));
