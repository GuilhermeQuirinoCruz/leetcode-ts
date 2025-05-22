function getValidStrings(n: number, str: string): string[] {
  if (n == 0) {
    return [str];
  }

  let validStrings: string[] = [];

  validStrings = validStrings.concat(getValidStrings(n - 1, str + "1"));

  const lastCharacter: string = str[str.length - 1] || "1";
  if (lastCharacter == "1") {
    validStrings = validStrings.concat(getValidStrings(n - 1, str + "0"));
  }

  return validStrings;
}

function validStrings(n: number): string[] {
  return getValidStrings(n, "");
}

// Exemplo 1
console.log(validStrings(3));

// Exemplo 2
console.log(validStrings(1));
