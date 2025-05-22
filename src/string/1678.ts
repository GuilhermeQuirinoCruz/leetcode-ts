// One-liner
function interpret(command: string): string {
  return command.replaceAll("()", "o").replaceAll("(al)", "al");
}

// Longer version using for + switch
// function interpret(command: string): string {
//   let interpreted: string = "";
//   for (let i = 0; i < command.length; i++) {
//     const char = command[i];
//     switch (char) {
//       case "G":
//         interpreted += "G";
//         break;
//       case ")":
//         interpreted += "o";
//         break;
//       case "a":
//         interpreted += "al";
//         i += 2;
//         break;
//       default:
//         break;
//     }
//   }

//   return interpreted;
// }

// Example 1
console.log(interpret("G()(al)"));

// Example 2
console.log(interpret("G()()()()(al)"));

// Example 3
console.log(interpret("(al)G(al)()()G"));
