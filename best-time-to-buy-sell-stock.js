let prices = [7, 2, 6, 1, 9, 4];
function bestTime(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const potentialProfit = currentPrice - minPrice;
    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
    }
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }
  }
  return maxProfit;
}

console.log(bestTime(prices));
