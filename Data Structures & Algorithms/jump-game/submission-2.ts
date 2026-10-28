class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        let current = nums.length - 1;
        let destination = current - 1;

        const totalJumps = nums.reduce((acc, cur) => {
            return acc + cur;
        }, 0);
        const jumpNeeded = nums.length - 1;

        if (jumpNeeded === 0) return true;
        if (jumpNeeded > totalJumps) {
            return false;
        }
        while (destination > -1) {
            const needed = current - destination;
            const nextNum = nums[destination];

            if (needed > nextNum) {
                destination--;
            } else {
                current = destination;
                destination--;
            }
            if (current === 0) {
                return true;
            }
        }
        return false;
    }
}
