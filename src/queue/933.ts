class RecentCounter {
  requests: number[];

  constructor() {
    this.requests = [];
  }

  ping(t: number): number {
    this.requests.push(t);

    let numOfRequests: number = 0;
    const range: number[] = [t - 3000, t];
    for (let i = this.requests.length - 1; i >= 0; i--) {
      const time: number = this.requests[i];
      if (time < range[0] || time > range[1]) {
        break;
      }

      numOfRequests++;
    }

    return numOfRequests;
  }
}

// Example 1
const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1)); // return 1
console.log(recentCounter.ping(100)); // return 2
console.log(recentCounter.ping(3001)); // return 3
console.log(recentCounter.ping(3002)); // return 3
