class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1: number[], nums2: number[]): number[] {
        let result: number[] = new Array(nums1.length).fill(-1);
        const nums1Idx = new Map<number, number>();

        nums1.forEach((num, idx) => nums1Idx.set(num, idx));

        let stack: number[] = [];
        for (let num of nums2) {
            while (stack.length && num > stack[stack.length - 1]) {
                const currentNum1 = stack.pop();
                const idx = nums1Idx.get(currentNum1);
                result[idx] = num;
            }
            if (nums1Idx.has(num)) {
                stack.push(num);
            }
        }

        return result;
    }
}
