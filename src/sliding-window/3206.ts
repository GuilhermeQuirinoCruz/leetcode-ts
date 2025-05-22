function numberOfAlternatingGroups(colors: number[]): number {
  let alternatingGroups: number = 0;

  for (let i = 0; i < colors.length; i++) {
    if (
      colors[(i + 1) % colors.length] != colors[i] &&
      colors[(i + 2) % colors.length] == colors[i]
    ) {
      alternatingGroups++;
    }
  }

  return alternatingGroups;
}

// Example 1
console.log(numberOfAlternatingGroups([1, 1, 1]));

// Example 2
console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1]));
