// Shorter solution using built-in functions
function reversePrefix(word: string, ch: string): string {
  const firstOcurrenceIndex: number = word.indexOf(ch);
  if (firstOcurrenceIndex == -1) {
    return word;
  }

  const reversedString: string = [...word.substring(0, firstOcurrenceIndex + 1)].reverse().join("");
  const resultingWord: string =
    reversedString + word.substring(firstOcurrenceIndex + 1, word.length + 1);

  return resultingWord;
}

// Longer solution using simple for loops
// function reversePrefix(word: string, ch: string): string {
//   const characters: string[] = [...word];
//   let firstOcurrenceIndex: number = -1;

//   for (let i = 0; i < characters.length; i++) {
//     if (characters[i] == ch) {
//       firstOcurrenceIndex = i;
//       break;
//     }
//   }

//   let resultingWord: string = "";
//   for (let i = firstOcurrenceIndex; i >= 0; i--) {
//     resultingWord += characters[i];
//   }

//   for (let i = firstOcurrenceIndex + 1; i < characters.length; i++) {
//     resultingWord += characters[i];
//   }

//   return resultingWord;
// }


// Example 1
console.log(reversePrefix("abcdefd", "d"));

// Example 2
console.log(reversePrefix("xyxzxe", "z"));

// Example 3
console.log(reversePrefix("abcd", "z"));
