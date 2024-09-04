/** How can we optimize the above function
 * lety's use kadanes algorithm
 */

var maxProfit_v2 = function (prices) {
  let m_p = 0,
    c_p = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    c_p = Math.max(0, c_p + prices[i + 1] - prices[i]);
    m_p = Math.max(c_p, m_p);
  }

  return m_p;
};
