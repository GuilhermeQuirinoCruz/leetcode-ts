function closesBracket(open: string, close: string): boolean {
  switch (open) {
    case "(":
      return close == ")";
    case "[":
      return close == "]";
    case "{":
      return close == "}";
    default:
      return false;
  }
}

function isValid(s: string): boolean {
  let bracketStack: string[] = [];

  for (const bracket of s) {
    if ("([{".includes(bracket)) {
      bracketStack.push(bracket);
    } else {
      const openBracket: string = bracketStack.pop() || "";
      if (!closesBracket(openBracket, bracket)) {
        return false;
      }
    }
  }

  if (bracketStack.length > 0) {
    return false;
  }

  return true;
}

// Example 1
console.log(isValid("()"));

// Example 2
console.log(isValid("()[]{}"));

// Example 3
console.log(isValid("(]"));

// Example 4
console.log(isValid("([])"));
