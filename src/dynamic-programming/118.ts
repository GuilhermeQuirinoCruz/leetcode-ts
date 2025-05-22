function generate(numRows: number): number[][] {
  const rows: number[][] = [[1]];

  for (let row = 1; row < numRows; row++) {
    const left = [...rows[row - 1]].slice(0, Math.ceil(row / 2));

    for (let i = left.length - 1; i > 0; i--) {
      left[i] += left[i - 1];
    }

    const right: number[] = [...left].reverse();

    if (row % 2 == 0) {
      left.push(rows[row - 1][left.length - 1] * 2);
    }

    rows.push(left.concat(right));
  }

  return rows;
}

// Example 1
console.log(generate(5));

// Example 2
console.log(generate(1));
