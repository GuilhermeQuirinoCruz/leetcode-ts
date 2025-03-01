function findPermutationDifference(s: string, t: string): number {
  let permutationDifference: number = 0;

  for (let indexS = 0; indexS < s.length; indexS++) {
    const char: string = s[indexS];
    const indexT: number = t.indexOf(char);

    permutationDifference += Math.abs(indexS - indexT);
  }

  return permutationDifference;
}

// Example 1
console.log(findPermutationDifference("abc", "bac"));

// Example 2
console.log(findPermutationDifference("abcde", "edbac"));
