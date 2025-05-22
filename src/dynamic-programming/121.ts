class Stock {
  day: number;
  price: number;

  constructor(day: number, price: number) {
    this.day = day;
    this.price = price;
  }
}

function maxProfit(prices: number[]): number {
  let buy: Stock = new Stock(0, prices[0]);
  let sell: Stock = new Stock(0, 0);
  let highestProfit: number = 0;

  while (buy.day < prices.length - 1) {
    let highestPrice: number = -1;
    for (let i = buy.day; i < prices.length; i++) {
      const price: number = prices[i];
      if (price >= highestPrice) {
        sell.day = i;
        sell.price = price;
        highestPrice = price;
      }
    }

    for (let i = buy.day + 1; i < sell.day; i++) {
      if (prices[i] < buy.price) {
        buy.price = prices[i];
        buy.day = i;
      }
    }

    highestProfit = Math.max(highestProfit, sell.price - buy.price);
    
    buy.day = sell.day + 1;
    buy.price = prices[buy.day] || 0;
  }

  return Math.max(highestProfit, 0);
}

// Example 1
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// Example 2
console.log(maxProfit([7, 6, 4, 3, 1]));

// Example 3
console.log(maxProfit([2, 1, 4]));

// Example 4
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));

// Example 5
console.log(maxProfit([6, 5, 5, 3, 10, 1, 9]));
