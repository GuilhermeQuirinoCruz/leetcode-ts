function maximumLengthSubstring(s: string): number {
  let maxLength: number = 0;

  let occurences: { [key: string]: number } = {};
  let currentString: string = "";
  for (let i = 0; i < s.length; i++) {
    const character = s[i];
    currentString += character;
    
    if (occurences[character]) {
      occurences[character] += 1;
    } else {
      occurences[character] = 1;
    }
    
    while (occurences[character] > 2) {
      const leftmostCharacter: string = currentString[0];
      occurences[leftmostCharacter] -= 1;
      currentString = currentString.slice(1, currentString.length);
    }

    maxLength = Math.max(maxLength, currentString.length);
  }

  return maxLength;
}

// Example 1
console.log(maximumLengthSubstring("bcbbbcba"));

// Example 2
console.log(maximumLengthSubstring("aaaa"));
