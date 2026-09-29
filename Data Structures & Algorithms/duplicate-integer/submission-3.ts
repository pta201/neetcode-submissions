class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Map<number,boolean>();
        let result = false;
        nums.forEach(num => {
            if(map.has(num)){
                result = true;
            }
            map.set(num,true);
        })
        return result;
    }
}
