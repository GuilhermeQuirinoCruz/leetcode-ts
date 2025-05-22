// Using a map
// function firstUniqChar(s: string): number {
//   let characterCount: Map<string, number> = new Map<string, number>();

//   for (const character of s) {
//     characterCount.set(character, (characterCount.get(character) || 0) + 1);
//   }

//   for (const [character, count] of characterCount) {
//     if (count == 1) {
//       return s.indexOf(character);
//     }
//   }

//   return -1;
// }

// Using a queue
function firstUniqChar(s: string): number {
  let characters: string[] = [];
  for (let i = 97; i < 97 + 26; i++) {
    characters.push(String.fromCharCode(i));
  }

  let firstUnique: number = s.length;
  for (const character of characters) {
    const firstIndex: number = s.indexOf(character);
    if (firstIndex == -1) {
      continue;
    }

    const lastIndex: number = s.lastIndexOf(character);

    firstUnique =
      firstIndex == lastIndex && firstIndex < firstUnique
        ? firstIndex
        : firstUnique;
  }

  return firstUnique == s.length ? -1 : firstUnique;
}

// Example 1
console.log(firstUniqChar("leetcode"));

// Example 2
console.log(firstUniqChar("loveleetcode"));

// Example 3
console.log(firstUniqChar("aabb"));

// Example 4
console.log(firstUniqChar("aadadaad"));
