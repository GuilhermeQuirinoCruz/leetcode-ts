function longestCommonPrefix(strs: string[]): string {
  let longestPrefix: string = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let commonPrefix: string = "";
    const current: string = strs[i];
    for (let j = 0; j < longestPrefix.length; j++) {
      if (current[j] != longestPrefix[j]) {
        break;
      }

      commonPrefix += current[j];
    }

    longestPrefix = commonPrefix;

    if (longestPrefix.length == 0) {
      break;
    }
  }

  return longestPrefix;
}

// Example 1
console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// Example 2
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
