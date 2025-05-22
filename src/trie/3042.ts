function isPrefix(str1: string, str2: string): boolean {
  return str2.startsWith(str1);
}

function isSuffix(str1: string, str2: string): boolean {
  return str2.endsWith(str1);
}

function countPrefixSuffixPairs(words: string[]): number {
  let validPairs: number = 0;

  for (let i = 0; i < words.length - 1; i++) {
    const str1: string = words[i];
    for (let j = i + 1; j < words.length; j++) {
      const str2: string = words[j];
      if (str1.length > str2.length) {
        continue;
      }

      validPairs += isPrefix(str1, str2) && isSuffix(str1, str2) ? 1 : 0;
    }
  }

  return validPairs;
}

// Example 1
console.log(countPrefixSuffixPairs(["a", "aba", "ababa", "aa"]));

// Example 2
console.log(countPrefixSuffixPairs(["pa", "papa", "ma", "mama"]));

// Example 3
console.log(countPrefixSuffixPairs(["abab", "ab"]));
