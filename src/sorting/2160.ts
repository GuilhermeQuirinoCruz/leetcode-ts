// Standard approach
// function minimumSum(num: number): number {
//   const sortedDigits: number[] = num
//     .toString()
//     .split("")
//     .map((digit) => {
//       return Number.parseInt(digit);
//     })
//     .sort((a, b) => {
//       return a - b;
//     });
  
//   return (
//     (sortedDigits[0] + sortedDigits[1]) * 10 + sortedDigits[2] + sortedDigits[3]
//   );
// }

// Using functional programming
function minimumSum(num: number): number {
  return num
    .toString()
    .split("")
    .map((digit) => {
      return Number.parseInt(digit);
    })
    .sort((a, b) => {
      return a - b;
    })
    .reduce((prev, curr, index) => {
      prev += curr * (index < 2 ? 10 : 1);
      return prev;
    }, 0);
}

// Example 1
console.log(minimumSum(2932));

// Example 2
console.log(minimumSum(4009));
