class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
  let result: number[] = [];
  for (let i = 0; i < nums.length ; i++) {
    const mapIdx = nums[i];
    map.set(mapIdx, i);
  }
  for (let i = 0; i < nums.length ; i++) {
      const remainIdx = target - nums[i];
    const hasValue = map.has(remainIdx);
    const hasResult = result.length === 2;
    const notCurrentIdx = map.get(remainIdx) !== i;
    if (hasValue && !hasResult && notCurrentIdx) {
      result = [i, map.get(remainIdx)!];
    }
  }
  return result;
  }
}
