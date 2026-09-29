class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
      
        for (const i in nums){
            const remain = target - nums[i];
            if(map.has(remain)){
                return [Number(i), Number(map.get(remain))]
            }
            map.set(nums[i],i)
        }
    }
}
