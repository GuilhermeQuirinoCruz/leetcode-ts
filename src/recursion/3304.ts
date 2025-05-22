function numberToCharacter(n: number): string {
  return String.fromCharCode(97 + n);
}

function characterToNumber(char: string): number {
  return char.charCodeAt(0) - 97;
}

function appendCharacters(str: string, k: number): string {
  let append: string = "";
  for (let i = 0; i < str.length; i++) {
    append += numberToCharacter((characterToNumber(str[i]) + 1) % 26);
  }

  str += append;
  if (str.length >= k) {
    return str;
  }

  return appendCharacters(str, k);
}

function kthCharacter(k: number): string {
  return appendCharacters("a", k)[k - 1];
}

// Exemplo 1
console.log(kthCharacter(5));

// Exemplo 2
console.log(kthCharacter(10));
