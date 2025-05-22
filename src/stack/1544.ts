function areCharactersEqual(a: string, b: string): boolean {
  return Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) == 32;
}

function makeGood(s: string): string {
  let characterStack: string[] = [];
  for (let character of s) {
    const lastCharacter: string = characterStack.pop() || "";
    if (!areCharactersEqual(lastCharacter, character)) {
      characterStack.push(lastCharacter);
      characterStack.push(character);
    }
  }

  return characterStack.join("");
}

// Example 1
console.log(makeGood("leEeetcode"));

// Example 2
console.log(makeGood("abBAcC"));

// Example 3
console.log(makeGood("s"));
