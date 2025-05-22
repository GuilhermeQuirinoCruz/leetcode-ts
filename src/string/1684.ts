function countConsistentStrings(allowed: string, words: string[]): number {
  let consistentStrings: number = 0;

  for (let i = 0; i < words.length; i++) {
    const word: string[] = words[i].split("");
    let isConsistent: boolean = true;

    for (let j = 0; j < word.length; j++) {
      const char: string = word[j];
      if (!allowed.includes(char)) {
        isConsistent = false;
        break;
      }
    }

    consistentStrings += isConsistent ? 1 : 0;
  }

  return consistentStrings;
}

// Example 1
console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]));

// Example 2
console.log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]));

// Example 3
console.log(countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"]));
