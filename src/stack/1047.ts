function removeDuplicates(s: string): string {
  let letterStack: string[] = [];

  for (const letter of s) {
    const lastLetter: string = letterStack.pop() || "";
    if (letter != lastLetter) {
      letterStack.push(lastLetter);
      letterStack.push(letter);
    }
  }

  return letterStack.join("");
}

// Example 1
console.log(removeDuplicates("abbaca"));

// Example 2
console.log(removeDuplicates("azxxzy"));
