class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if (s.length === 0) return 0;
        let l = 0;
        let max = 0;
        const charSet = new Set<string>();

        for (let r = 0; r < s.length; r++) {
            while (charSet.has(s[r])) {
                charSet.delete(s[l]);
                l++;
            }
            charSet.add(s[r]);
            max = Math.max(r - l + 1, max);
        }

        return max;
    }
}
