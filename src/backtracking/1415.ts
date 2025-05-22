const alphabet: string[] = ["a", "b", "c"];

function getAllHappyStrings(
  n: number,
  current: string,
): string[] {
  if (n == 0) {
    return [current];
  }

  let happyStrings: string[] = [];
  for (let i = 0; i < alphabet.length; i++) {
    if (current && alphabet[i] == current[current.length - 1]) {
      continue;
    }
    
    happyStrings = happyStrings.concat(
      getAllHappyStrings(n - 1, current + alphabet[i])
    );
  }
  
  return happyStrings;
}

function getHappyString(n: number, k: number): string {
  const totalHappyStrings: number = 3 * Math.pow(2, n - 1);
  if (k > totalHappyStrings) {
    return "";
  }

  return getAllHappyStrings(n, "")[k - 1];
}

// Exemplo 1
console.log(getHappyString(1, 3));

// Exemplo 2
console.log(getHappyString(1, 4));

// Exemplo 3
console.log(getHappyString(3, 9));

// Exemplo 4
console.log(getHappyString(2, 1));