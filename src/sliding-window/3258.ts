function countKConstraintSubstrings(s: string, k: number): number {
  // Every substring of length = 1 satisfies the constraint
  let validSubstrings: number = s.length;

  let windowSize: number = 2;
  while (windowSize <= s.length) {
    for (let i = 0; i <= s.length - windowSize; i++) {
      let zeros: number = 0;
      let ones: number = 0;

      let valid: boolean = true;
      for (let j = 0; j < windowSize && valid; j++) {
        zeros += s[i + j] == "0" ? 1 : 0;
        ones += s[i + j] == "1" ? 1 : 0;
        if (zeros > k && ones > k) {
          valid = false;
        }
      }

      validSubstrings += valid ? 1 : 0;
    }

    windowSize++;
  }

  return validSubstrings;
}

// Example 1
console.log(countKConstraintSubstrings("10101", 1));

// Example 2
console.log(countKConstraintSubstrings("1010101", 2));

// Example 3
console.log(countKConstraintSubstrings("11111", 1));

