function isSubsequence(s: string, t: string): boolean {
  if (s.length == 0) {
    return true;
  }

  let current: number = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] == s[current]) {
      current += 1;
    }

    if (current == s.length) {
      return true;
    }
  }

  return false;
}

// Example 1
console.log(isSubsequence("abc", "ahbgdc"));

// Example 2
console.log(isSubsequence("axc", "ahbgdc"));
