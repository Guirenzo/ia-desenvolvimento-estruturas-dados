function maxProfit(prices) {
  let minPrice = Infinity;
  let bestProfit = 0;

  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    bestProfit = Math.max(bestProfit, price - minPrice);
  }

  return bestProfit;
}

module.exports = maxProfit;
