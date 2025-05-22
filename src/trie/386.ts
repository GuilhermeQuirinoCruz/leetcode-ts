class Trie {
  value: number;
  children: Trie[];

  constructor() {
    this.value = -1;
    this.children = new Array<Trie>(10);
  }

  insert(num: number) {
    const digits: number[] = Array.from(String(num), Number);

    let current: Trie = this;
    for (let digit of digits) {
      let child: Trie = current.children[digit];
      if (!child) {
        child = new Trie();
        current.children[digit] = child;
      }

      current = child;
    }

    current.value = num;
  }

  getInLexicalOrder(): number[] {
    let arr: number[] = [this.value];

    for (const child of this.children) {
      if (!child) {
        continue;
      }

      arr = arr.concat(child.getInLexicalOrder());
    }

    return arr;
  }
}

// Using a trie
function lexicalOrder(n: number): number[] {
  const nums: Trie = new Trie();
  for (let num = 1; num <= n; num++) {
    nums.insert(num);
  }

  return nums.getInLexicalOrder().slice(1);
}

// Using map and sort
// function lexicalOrder(n: number): number[] {
//   return new Array<string>(n)
//     .fill("")
//     .map((_, index) => {
//       return String(index + 1);
//     })
//     .sort((a, b) => {
//       return a.localeCompare(b);
//     })
//     .map((num) => {
//       return Number.parseInt(num);
//     });
// }

// Example 1
console.log(lexicalOrder(13));

// Example 1
console.log(lexicalOrder(2));