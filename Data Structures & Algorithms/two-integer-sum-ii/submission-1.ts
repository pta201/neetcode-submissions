class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0,
            right = numbers.length - 1;
        while (right > left) {
            let mid = Math.floor((right + left) / 2);
            const leftNum = numbers[left];
            const rightNum = numbers[right];
            const total = leftNum + rightNum;
            // console.log(leftNum, rightNum, total, target);
            if (total === target) {
                return [left + 1, right + 1];
            } else if (total > target) {
                right -= 1;
            } else {
                left += 1;
            }
        }
    }
}
