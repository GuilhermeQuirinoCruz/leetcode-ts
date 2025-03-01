function findWordsContaining(words: string[], x: string): number[] {
  let indexWordsThatContain: number[] = [];

  words.forEach((word, i) => {
    if (word.includes(x)) {
      indexWordsThatContain.push(i);
    }
  });

  return indexWordsThatContain;
}

// Example 1
console.log(findWordsContaining(["leet","code"], "e"));

// Example 2
console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "a"));

// Example 3
console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "z"));
