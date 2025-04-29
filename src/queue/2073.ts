function timeRequiredToBuy(tickets: number[], k: number): number {
  let time: number = 0;

  while (tickets.length > 0) {
    time++;

    tickets[0]--;
    const firstInLine: number = tickets.shift() || 0;

    if (firstInLine != 0) {
      tickets.push(firstInLine);
    } else if (k == 0) {
      break;
    }

    k = k == 0 ? tickets.length - 1 : (k - 1) % tickets.length;
  }

  return time;
}

// Example 1
console.log(timeRequiredToBuy([2, 3, 2], 2));

// Example 1
console.log(timeRequiredToBuy([5, 1, 1, 1], 0));

// 3 2 1 0 3 2 1 0
//
