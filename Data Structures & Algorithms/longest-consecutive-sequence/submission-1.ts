class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
         const map = new Map<number,boolean>();
        // Populate map
        for(let i = 0; i < nums.length ; i++){
            map.set(nums[i], true);
        }
        console.log(map);
        // Find the starting points of sequences
        for(let i = 0; i < nums.length ; i++){
            if(map.has(nums[i]-1)){
                map.set(nums[i], false);
            }
        }
        let longestStreak = 0;
        // Find the longest sequence
        for(let i = 0; i < nums.length ; i++){
            if(map.get(nums[i])){
                let currentNum = nums[i];
                let currentStreak = 1;
                while(map.has(currentNum + 1)){
                    currentNum += 1;
                    currentStreak += 1;
                }
                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }
        return longestStreak;
    }
}
