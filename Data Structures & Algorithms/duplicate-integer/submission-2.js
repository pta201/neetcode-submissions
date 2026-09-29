class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set()
        nums.forEach(n => set.add(n))
        return nums.length !== set.size
    }
}
