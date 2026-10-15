class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length;
        while (left < right) {
            let mid = Math.floor((right + left) / 2);
            const curNum = nums[mid];
            if (curNum === target) return mid;
            else if (curNum > target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return -1;
    }
}
