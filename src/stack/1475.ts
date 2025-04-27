function finalPrices(prices: number[]): number[] {
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        prices[i] -= prices[j];
        break;
      }
    }
  }

  return prices;
}

// Example 1
console.log(finalPrices([8, 4, 6, 2, 3]));

// Example 2
console.log(finalPrices([1, 2, 3, 4, 5]));

// Example 3
console.log(finalPrices([10, 1, 1, 6]));
