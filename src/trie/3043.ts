class Trie {
  children: Trie[];

  constructor() {
    this.children = Array(10);
  }

  insert(num: number[]) {
    let curr: Trie = this;
    for (let digit of num) {
      if (!curr.children[digit]) {
        curr.children[digit] = new Trie();
      }

      curr = curr.children[digit];
    }
  }

  insertArr(nums: number[][]) {
    nums.forEach((num) => {
      this.insert(num);
    });
  }
  
  getDepth(num: number[]): number {
    let curr: Trie = this;
    let depth: number = 0;

    for (let i = 0; i < num.length && curr.children[num[i]]; i++) {
      curr = curr.children[num[i]];
      depth += 1;
    }

    return depth;
  }
}

function getDigitsFromArr(arr): number[][] {
  return arr.map((num) => {
    return Array.from(String(num), Number);
  });
}

function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  let longest: number = 0;

  const digits1: number[][] = getDigitsFromArr(arr1);
  const digits2: number[][] = getDigitsFromArr(arr2);

  const digitsTrie: Trie = new Trie();
  digitsTrie.insertArr(digits1);

  for (let digits of digits2) {
    longest = Math.max(longest, digitsTrie.getDepth(digits));
  }

  return longest;
}

// Example 1
console.log(longestCommonPrefix([1, 10, 100], [1000]));

// Example 1
console.log(longestCommonPrefix([1, 2, 3], [4, 4, 4]));