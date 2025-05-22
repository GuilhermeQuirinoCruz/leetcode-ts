// Using a stack
function removeOuterParentheses(s: string): string {
  let primitives: string[] = [];

  let start: number = 0;
  let end: number = 0;
  let parenthesesStack: string[] = [];
  for (let parentheses of s) {
    end += 1;
    if (parentheses == "(") {
      parenthesesStack.push("(");
    } else {
      parenthesesStack.pop();
    }

    if (parenthesesStack.length == 0) {
      primitives.push(s.slice(start, end));
      start = end;
    }
  }

  let withoutOutermost: string[] = [];
  for (let primitive of primitives) {
    withoutOutermost.push(primitive.slice(1, primitive.length - 1));
  }

  return withoutOutermost.join("");
}

// Using a counter
// function removeOuterParentheses(s: string): string {
//   let start: number = 0;
//   let end: number = 0;
//   let stackSize: number = 0;
//   let withoutOutermost: string = "";

//   for (let parentheses of s) {
//     end += 1;
//     if (parentheses == "(") {
//       stackSize++;
//     } else {
//       stackSize--;
//     }

//     if (stackSize == 0) {
//       withoutOutermost += s.slice(start, end).slice(1, end - start - 1);
//       start = end;
//     }
//   }

//   return withoutOutermost;
// }

// Example 1
console.log(removeOuterParentheses("(()())(())"));

// Example 2
console.log(removeOuterParentheses("(()())(())(()(()))"));

// Example 3
console.log(removeOuterParentheses("()()"));
