import MaxHeap from "./max-heap";

// Sorting then using a for loop
// function deleteGreatestValue(grid: number[][]): number {
//   let answer: number = 0;

//   for (let row of grid) {
//     row.sort((a, b) => {
//       return a - b;
//     });
//   }

//   while (grid[0].length > 0) {
//     let max: number = 0;
//     for (let row of grid) {
//       max = Math.max(row.pop() || 0, max);
//     }

//     answer += max;
//   }

//   return answer;
// }

function deleteGreatestValue(grid: number[][]): number {
  let answer: number = 0;

  let rowHeap: MaxHeap[] = [];
  
  for (let row of grid) {
    rowHeap.push(new MaxHeap(row));
  }

  while (rowHeap[0].size() > 0) {
    let max: number = 0;
    for (let row of rowHeap) {
      max = Math.max(row.extract(), max);
    }

    answer += max;
  }

  return answer;
}

// Example 1
console.log(
  deleteGreatestValue([
    [1, 2, 4],
    [3, 3, 1],
  ])
);

// Example 2
console.log(deleteGreatestValue([[10]]));
