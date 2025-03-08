// Simple for loop
// Doesn't work when nums is too big
// function isNiceSubarray(nums: number[], k: number): boolean {
//   let oddNumbers: number = 0;
//   for (let i = 0; i < nums.length; i++) {
//     oddNumbers += nums[i] % 2 != 0 ? 1 : 0;

//     if (oddNumbers > k || k - oddNumbers > nums.length - 1 - i) {
//       return false;
//     }
//   }

//   return oddNumbers == k;
// }

// function numberOfSubarrays(nums: number[], k: number): number {
//   let niceSubarrays: number = 0;

//   for (let subArraySize = k; subArraySize <= nums.length; subArraySize++) {
//     for (let i = 0; i <= nums.length - subArraySize; i++) {
//       niceSubarrays += isNiceSubarray(nums.slice(i, i + subArraySize), k)
//         ? 1
//         : 0;
//     }
//   }

//   return niceSubarrays;
// }


// Sliding window approach
// It works, but it's too slow
// class Interval {
//   beginning: number = 0;
//   end: number = 0;
//   oddBeginning: number = -1;
//   oddEnd: number = -1;
// }

// function numberOfSubarrays(nums: number[], k: number): number {
//   let niceSubarrays: number = 0;

//   let searchStart: number = 0;
//   let intervals: Interval[] = [];
//   while (searchStart <= nums.length - k) {
//     let oddNumbers: number = 0;

//     let interval: Interval = new Interval();
//     interval.beginning = searchStart;
//     for (let i = searchStart; i < nums.length; i++) {
//       interval.end = i;

//       if (nums[i] % 2 == 0) {
//         continue;
//       }

//       oddNumbers++;
//       if (oddNumbers > k) {
//         oddNumbers--;
//         interval.end = i - 1;
//         break;
//       }

//       if (interval.oddBeginning == -1) {
//         interval.oddBeginning = i;
//       }
//       interval.oddEnd = Math.max(interval.oddBeginning, i);
//     }

//     interval.end = interval.end == -1 ? nums.length - 1 : interval.end;

//     if (oddNumbers == k) {
//       intervals.push(interval);
//       searchStart = interval.oddBeginning + 1;
//     } else {
//       break;
//     }
//   }

//   intervals.forEach((interval) => {
//     const before: number = interval.oddBeginning - interval.beginning;
//     const middle: number = 1;
//     const after: number = interval.end - interval.oddEnd;
//     const whole: number = before * after;

//     niceSubarrays += before + middle + after + whole;
//   });

//   return niceSubarrays;
// }


// Most efficient solution
function numberOfSubarrays(nums: number[], k: number): number {
  let niceSubarrays: number = 0;

  let oddNumbersIndices: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 != 0) {
      oddNumbersIndices.push(i);
    }
  }

  if (oddNumbersIndices.length < k) {
    return 0;
  }

  for (let i = 0; i <= oddNumbersIndices.length - k; i++) {
    let oddIndex: number = oddNumbersIndices[i];
    let intervalStart: number = 0;
    if (i > 0) {
      intervalStart = oddNumbersIndices[i - 1] + 1;
    }
    const before: number = oddIndex - intervalStart;

    const middle: number = 1;

    let intervalEnd: number = nums.length - 1;
    if (i + k < oddNumbersIndices.length) {
      intervalEnd = oddNumbersIndices[i + k] - 1;
    }
    const after: number = intervalEnd - oddNumbersIndices[i + k - 1];

    const whole: number = before * after;

    niceSubarrays += before + middle + after + whole;
  }

  return niceSubarrays;
}

// Example 1
console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));

// Example 2
console.log(numberOfSubarrays([2, 4, 6], 1));

// Example 3
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));

// console.log(numberOfSubarrays([1, 2, 1, 2, 1, 2, 2, 1, 1], 3));
