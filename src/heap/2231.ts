import MaxHeap from "./max-heap";

function largestInteger(num: number): number {
  const digits: number[] = Array.from(num.toString(), Number);

  let evenHeap: MaxHeap = new MaxHeap(
    digits.filter((digit) => {
      return digit % 2 == 0;
    })
  );

  let oddHeap: MaxHeap = new MaxHeap(
    digits.filter((digit) => {
      return digit % 2 != 0;
    })
  );

  let largest: number[] = [];
  for (const digit of digits) {
    const largestDigit =
      digit % 2 == 0 ? evenHeap.extract() : oddHeap.extract();

    largest.push(largestDigit);
  }

  return Number(largest.join(''));
}

// Example 1
console.log(largestInteger(1234));

// Example 1
console.log(largestInteger(65875));
