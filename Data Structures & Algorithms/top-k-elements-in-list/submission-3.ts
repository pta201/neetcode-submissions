class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
   const count = new Map<number, number>();

  nums.forEach((num) => {
    if (count.has(num)) {
      const curCount = count.get(num) ?? 0;
      count.set(num, curCount + 1);
    } else {
      count.set(num, 1);
    }
  });
   return Array.from(count.entries())
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .slice(0, k)
    .map((num) => num[0]);
    }
}
