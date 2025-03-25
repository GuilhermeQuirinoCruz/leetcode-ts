function getLexicographicallySmallest(numbers: string[]): string {
  if (numbers.length == 0) {
    return "";
  }

  return numbers
    .map((n: string) => {
      return Number.parseInt(n);
    })
    .reduce((a, b) => {
      return a < b ? a : b;
    })
    .toString();
}

// II []
// II [1]
// I [1, 2]
// "" [1, 2, 3]
function getSmallestNumber(pattern: string, current: number[]): string {
  if (!pattern) {
    return current.join("");
  }

  const copy: number[] = [...current];
  for (let i = 1; i <= 9; i++) {
    current = [...copy];
    if (current.length > 0) {
      if (current.includes(i)) {
        continue;
      }

      if (pattern[0] == "I" && i < current[current.length - 1]) {
        continue;
      }

      if (pattern[0] == "D" && i > current[current.length - 1]) {
        continue;
      }
    }

    current.push(i);

    let possibleNumber: string = getSmallestNumber(pattern.slice(1), current);
    if (possibleNumber) {
      return possibleNumber;
    }
  }

  return "";
}

function smallestNumber(pattern: string): string {
  return getSmallestNumber(" " + pattern, []);
}

// Exemplo 1
console.log(smallestNumber("IIIDIDDD"));

// Exemplo 2
console.log(smallestNumber("DDD"));

// Exemplo 3
console.log(smallestNumber("II"));