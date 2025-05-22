function isGoodSubstring(substring: string): boolean {
  for (let i = 0; i < substring.length - 1; i++) {
    for (let j = 1; j < substring.length - i; j++) {
      // console.log("cmp:", substring[i], substring[i + j]);
      if (substring[i] == substring[i + j]) {
        return false;
      }
    }
  }

  return true;
}

function countGoodSubstrings(s: string): number {
  let goodSubstrings: number = 0;

  for (let i = 0; i < s.length - 2; i++) {
    goodSubstrings += isGoodSubstring(s.slice(i, i + 3)) ? 1 : 0;
  }

  return goodSubstrings;
}

// Example 1
console.log(countGoodSubstrings("xyzzaz"));

// Example 2
console.log(countGoodSubstrings("aababcabc"));