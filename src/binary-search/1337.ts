function findSoldier(row: number[]): number {
  let left: number = 0;
  let right: number = row.length - 1;
  let middle: number = 0;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (row[middle] == 1) {
      return middle;
    } else if (row[middle] == 0) {
      right = middle - 1;
    } else {
      left = middle;
    }
  }

  return -1;
}

class Row {
  indexInMatrix: number;
  soldiers: number;

  constructor(index: number, soldiers: number) {
    this.indexInMatrix = index;
    this.soldiers = soldiers;
  }
}

function kWeakestRows(mat: number[][], k: number): number[] {
  let rows: Row[] = [];

  for (let i = 0; i < mat.length; i++) {
    let row = new Row(i, 0);

    let soldierIndex: number = findSoldier(mat[i]);
    let rightmost: number = soldierIndex;
    if (soldierIndex != -1) {
      do {
        rightmost++;
      } while (mat[i][rightmost] == 1);

      row.soldiers = rightmost;
    }

    rows.push(row);
  }

  rows.sort((a, b) => {
    if (a.soldiers == b.soldiers) {
      return a.indexInMatrix - b.indexInMatrix;
    }

    return a.soldiers - b.soldiers;
  });

  let weakestRows: number[] = [];
  for (let i = 0; i < k; i++) {
    weakestRows.push(rows[i].indexInMatrix);
  }

  return weakestRows;
}

// Example 1
console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
);

// Example 2
console.log(
  kWeakestRows(
    [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
    2
  )
);
