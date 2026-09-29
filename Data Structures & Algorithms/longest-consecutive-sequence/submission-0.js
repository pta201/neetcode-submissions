class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
   longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    const set = new Set(nums);
    const sortedItems = [...set].sort((a, b) => a - b);

    let res = 1;
    let curRes = 1;

    for (let i = 1; i < sortedItems.length; i++) {
        if (sortedItems[i] === sortedItems[i - 1] + 1) {
            curRes += 1;
        } else {
            res = Math.max(res, curRes);
            curRes = 1;
        }
    }

    res = Math.max(res, curRes); // in case the longest sequence is at the end
    return res;
}

}
