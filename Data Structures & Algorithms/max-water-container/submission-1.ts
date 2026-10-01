class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let currentResult = [0, left, right];
        while (left < right) {
            const containerWidth = right - left;
            const minHeight = Math.min(heights[left], heights[right]);

            const area = containerWidth * minHeight;
            if (area > currentResult[0]) {
                currentResult = [area, left, right];
            }
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return currentResult[0];
    }
}
