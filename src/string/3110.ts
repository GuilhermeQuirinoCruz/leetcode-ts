function scoreOfString(s: string): number {
  let score: number = 0;

  for (let i = 0; i < s.length - 1; i++) {
    const firstCharacterAscii: number = s[i].charCodeAt(0);
    const secondCharacterAscii: number = s[i + 1].charCodeAt(0);

    score += Math.abs(secondCharacterAscii - firstCharacterAscii);
  }

  return score;
}

// Example 1
console.log(scoreOfString("hello"));

// Example 2
console.log(scoreOfString("zaz"));
