function numJewelsInStones(jewels: string, stones: string): number {
  let numJewels: number = 0;

  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      numJewels += jewels[i] == stones[j] ? 1 : 0;
    }
  }

  return numJewels;
}

// Example 1
console.log(numJewelsInStones("aA", "aAAbbbb"));

// Example 2
console.log(numJewelsInStones("z", "ZZ"));
