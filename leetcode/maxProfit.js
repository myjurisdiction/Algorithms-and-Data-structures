/**
 * @param {number[]} prices
 * @return {number}
 *
 * This problem is Best time to Buy and sell stocks
 */
var maxProfit = function (prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const diff = prices[j] - prices[i];
      if (diff > maxProfit) {
        maxProfit = diff;
      }
    }
  }

  return maxProfit;
};
