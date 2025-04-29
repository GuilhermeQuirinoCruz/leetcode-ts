function winner(senate: string): string {
  const radiants: number = (senate.match("R") || "").length;
  const dires: number = (senate.match("D") || "").length;

  if (radiants == 0) {
    return "Dire";
  } else if (dires == 0) {
    return "Radiant";
  }

  return "Draw";
}

function predictPartyVictory(senate: string): string {
  let winningParty: string = "Draw";

  let current: number = 0;
  while (winningParty == "Draw") {
    current %= senate.length;

    const senator: string = senate[current];
    if (senator == "-") {
      current++;
      continue;
    }

    const opposition: string = senator == "R" ? "D" : "R";

    const next = senate.indexOf(opposition, current);
    const ban = next != -1 ? next : senate.indexOf(opposition);

    if (ban != -1) {
      const beforeBanned: string = senate.substring(0, ban);
      const afterBanned: string = senate.substring(ban + 1, senate.length);

      senate = beforeBanned + "-" + afterBanned;
    }

    winningParty = winner(senate);
    current++;
  }

  return winningParty;
}

// Example 1
console.log(predictPartyVictory("RD"));

// Example 2
console.log(predictPartyVictory("RDD"));

// Example 3
console.log(predictPartyVictory("RRDDD"));
