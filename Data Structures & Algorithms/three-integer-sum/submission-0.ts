class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
  const sortedNums = nums.sort((a, b) => a - b);
  const resultSet = new Set<string>();

  for (let i = 0; i < sortedNums.length - 2; i++) {
    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
      if (sum === 0) {
        const triplet = [sortedNums[i], sortedNums[left], sortedNums[right]];
        const tripletKey = triplet.join(',');
        if (!resultSet.has(tripletKey)) {
          resultSet.add(tripletKey);
          result.push(triplet);
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
    }
}
