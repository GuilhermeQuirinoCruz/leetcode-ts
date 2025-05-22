function findJudge(n: number, trust: number[][]): number {
  if (n == 1 && trust.length == 0) {
    return 1;
  }

  let trustedBy: Map<number, number> = new Map();

  for (let i = 0; i < trust.length; i++) {
    const person1: number = trust[i][0];
    const person2: number = trust[i][1];

    trustedBy.set(person1, -1);

    const trustCount: number | undefined = trustedBy.get(person2);
    if (trustCount == -1) {
      continue;
    }

    trustedBy.set(person2, trustCount ? trustCount + 1 : 1);
  }

  for(let [person, trustCounter] of trustedBy) {
    if (trustCounter == n - 1) {
      return person;
    }
  }

  return -1;
}

// Example 1
console.log(findJudge(2, [[1, 2]]));

// Example 2
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
);

// // Example 3
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
);
