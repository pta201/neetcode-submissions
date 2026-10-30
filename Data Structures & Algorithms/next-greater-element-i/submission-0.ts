class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1: number[], nums2: number[]): number[] {
        let result: number[] = [];
        const stack: number[] = [];
        const nums1ToNums2Map = new Map<number, number>();
        for (let i = 0; i < nums1.length; i++) {
            const target = nums1[i];
            for (let j = 0; j < nums2.length; j++) {
                if (nums2[j] === target && j < nums2.length) {
                    nums1ToNums2Map.set(target, j);
                }
            }
        }

        for (let i = 0; i < nums1.length; i++) {
            const target = nums1[i];
            if (nums1ToNums2Map.has(target)) {
                const startIdx = nums1ToNums2Map.get(target);
                if (typeof startIdx === "undefined") {
                    result[i] = -1;
                } else {
                    for (let j = startIdx; j < nums2.length; j++) {
                        if (nums2[j] > target) {
                            result[i] = nums2[j];
                            break;
                        } else {
                            result[i] = -1;
                        }
                    }
                }
            }
        }

        return result;
    }
}
