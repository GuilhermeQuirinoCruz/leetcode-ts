function getRow(rowIndex: number): number[] {
  let row: number[] = [1];

  for (let i = 1; i <= rowIndex; i++) {
    const left = row.slice(0, Math.ceil(i / 2));

    for (let i = left.length - 1; i > 0; i--) {
      left[i] += left[i - 1];
    }

    const right: number[] = [...left].reverse();

    if (i % 2 == 0) {
      left.push(row[left.length - 1] * 2);
    }

    row = left.concat(right);
  }

  return row;
}

// Example 1
console.log(getRow(3));

// Example 2
console.log(getRow(0));

// Example 3
console.log(getRow(1));
