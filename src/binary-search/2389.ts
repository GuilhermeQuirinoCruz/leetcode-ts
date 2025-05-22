function longestSubsequence(nums: number[], max: number): number {
  let i: number = nums.length;
  let sum: number = nums.reduce((sum, value) => sum + value, 0);

  while (i >= 0 && sum > max) {
    sum -= nums[i - 1];
    i--;
  }

  return i;
}

function answerQueries(nums: number[], queries: number[]): number[] {
  let answers: number[] = [];
  nums.sort((a, b) => {
    return a - b;
  });

  queries.forEach((query) => {
    answers.push(longestSubsequence(nums, query));
  });

  return answers;
}

// Example 1
console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]));

// Example 2
console.log(answerQueries([2, 3, 4, 5], [1]));

// Example 3
console.log(
  answerQueries(
    [736411, 184882, 914641, 37925, 214915],
    [331244, 273144, 118983, 118252, 305688, 718089, 665450]
  )
);
