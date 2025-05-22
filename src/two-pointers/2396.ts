function toBaseB(n: number, base: number) {
  let digits: number[] = [];

  while (n > 0) {
    digits.push(n % base);
    n = Math.floor(n / base);
  }

  return digits.reverse();
}

function isPalindromic(n: number[]) {
  for (let i = 0; i < Math.floor(n.length / 2); i++) {
    if (n[i] != n[n.length - i]) {
      return false;
    }
  }

  return true;
}

function isStrictlyPalindromic(n: number): boolean {
  for (let base = 2; base <= n - 2; base++) {
    if (!isPalindromic(toBaseB(n, base))) {
      return false;
    }
  }

  return true;
}

// Example 1
console.log(isStrictlyPalindromic(9));

// Example 2
console.log(isStrictlyPalindromic(4));
