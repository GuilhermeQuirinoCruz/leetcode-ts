function sumKNumbers(
  code: number[],
  k: number,
  start: number,
  next: boolean
): number {
  let sum: number = 0;
  const direction: number = next ? 1 : -1;
  k = Math.abs(k);

  for (let i = start + direction; k > 0; i += direction, k--) {
    if (i < 0) {
      i = code.length - 1;
    } else if (i == code.length) {
      i = 0;
    }

    sum += code[i];
  }

  return sum;
}

function decrypt(code: number[], k: number): number[] {
  let decriptedCode: number[] = [];

  for (let i = 0; i < code.length; i++) {
    let decripted: number = k == 0 ? 0 : sumKNumbers(code, k, i, k > 0);

    decriptedCode.push(decripted);
  }

  return decriptedCode;
}

// Example 1
console.log(decrypt([5, 7, 1, 4], 3));

// Example 2
console.log(decrypt([1, 2, 3, 4], 0));

// Example 3
console.log(decrypt([2, 4, 9, 3], -2));
