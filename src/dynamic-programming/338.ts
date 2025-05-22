function countOnes(binaryNumber: number[]) {
  return binaryNumber.reduce((acc, curr) => {
    return acc + curr;
  });
}

function addOne(binaryNumber: number[]) {
  let carry: number = 1;
  for (let i = 0; i < binaryNumber.length; i++) {
    carry = binaryNumber[i]
    binaryNumber[i] = carry == 0 ? 1 : 0;

    if (carry == 0) {
      return;
    }
  }

  binaryNumber.push(1);
}

function countBits(n: number): number[] {
  const numOfOnes: number[] = [];
  const binaryNumber: number[] = [0];

  for (let i = 0; i <= n; i++) {
    numOfOnes.push(countOnes(binaryNumber));
    addOne(binaryNumber);
  }

  return numOfOnes;
}

// Example 1
console.log(countBits(2));

// Example 2
console.log(countBits(5));
