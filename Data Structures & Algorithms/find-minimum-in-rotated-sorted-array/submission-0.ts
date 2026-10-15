class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left = 0;
        let right = nums.length - 1;
        while (left < right) {
            let mid = Math.floor((right + left) / 2);
            const midNum = nums[mid];
            const rightNum = nums[right];
            if (midNum > rightNum) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return nums[left];
    }
}
