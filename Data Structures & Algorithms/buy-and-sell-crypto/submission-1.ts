class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let max = 0;
        for (let i = 0; i < prices.length; i++) {
            const buyPrice = prices[i];
            let j = i + 1;
            while (j < prices.length) {
                const sellPrice = prices[j];
                max = Math.max(sellPrice - buyPrice, max);
                j++;
            }
        }
        return max;
    }
}
