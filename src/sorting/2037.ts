function minMovesToSeat(seats: number[], students: number[]): number {
  let moves: number = 0;

  seats.sort((a, b) => {
    return a - b;
  });

  students.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < seats.length; i++) {
    moves += Math.abs(seats[i] - students[i]);
  }

  return moves;
}

// Example 1
console.log(minMovesToSeat([3, 1, 5], [2, 7, 4]));

// Example 2
console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6]));

// Example 3
console.log(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6]));

// Example 4
console.log(
  minMovesToSeat(
    [3, 20, 17, 2, 12, 15, 17, 4, 15, 20],
    [10, 13, 14, 15, 5, 2, 3, 14, 3, 18]
  )
);
