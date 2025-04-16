function findEvenNumbers2(digits: number[]): number[] {
  let evenNumbers: Set<number> = new Set<number>();

  digits.sort((a, _) => {
    return a % 2 == 0 ? -1 : 1;
  });

  let lastDigitsUsed: Set<number[]> = new Set<number[]>();
  for (let last = 0; digits[last] % 2 == 0; last++) {
    const lastDigit: number = digits[last];

    for (let second = 0; second < digits.length; second++) {
      if (second == last) {
        continue;
      }

      const secondDigit: number = digits[second];
      if (lastDigitsUsed.has([secondDigit, lastDigit])) {
        continue;
      }

      lastDigitsUsed.add([secondDigit, lastDigit]);

      for (let first = 0; first < digits.length; first++) {
        if (first == last || first == second) {
          continue;
        }

        const firstDigit: number = digits[first];

        addInteger([firstDigit, secondDigit, lastDigit], evenNumbers);
        addInteger([secondDigit, firstDigit, lastDigit], evenNumbers);
      }
    }
  }

  return [...evenNumbers.values()].sort((a, b) => {
    return a - b;
  });
}

function addInteger(integer: number[], evenNumbers: Set<number>) {
  evenNumbers.add(Number.parseInt(integer.join("")));
}

function findEvenNumbers(digits: number[]): number[] {
  let evenNumbers: Set<number> = new Set<number>();

  const evenDigits: number[] = [];
  const nonZeroDigits: number[] = [];

  digits.forEach((digit, index) => {
    if (digit != 0) {
      nonZeroDigits.push(index);
    }

    if (digit % 2 == 0) {
      evenDigits.push(index);
    }
  });

  let firstDigitsUsed: Set<number> = new Set<number>();
  for (let first = 0; first < nonZeroDigits.length; first++) {
    const firstIndex = nonZeroDigits[first];
    const firstDigit = digits[firstIndex];

    if (firstDigitsUsed.has(firstDigit)) {
      continue;
    }

    firstDigitsUsed.add(firstDigit);

    for (
      let secondIndex = 0;
      secondIndex < digits.length;
      secondIndex++
    ) {
      if (secondIndex == firstIndex) {
        continue;
      }

      const secondDigit = digits[secondIndex];

      for (let last = 0; last < evenDigits.length; last++) {
        const lastIndex = evenDigits[last];

        if (
          lastIndex == firstIndex ||
          lastIndex == secondIndex
        ) {
          continue;
        }

        const lastDigit = digits[lastIndex];

        addInteger([firstDigit, secondDigit, lastDigit], evenNumbers);
      }
    }
  }

  return [...evenNumbers.values()].sort((a, b) => {
    return a - b;
  });
}

// Example 1
console.log(findEvenNumbers([2, 1, 3, 0]));

// Example 2
console.log(findEvenNumbers([2, 2, 8, 8, 2]));

// Example 3
console.log(findEvenNumbers([3, 7, 5]));