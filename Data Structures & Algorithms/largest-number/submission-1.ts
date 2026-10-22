class Solution {
    /**
     * @param {number[]} nums
     * @return {string}
     */
    largestNumber(arr: number[]): string {
        const compare = (str1: number, str2: number) => {
            const str1String = String(str1);
            const str2String = String(str2);
            return Number(str2String.concat(str1String)) - Number(str1String.concat(str2String));
        };

        if (arr.length === 0) return "0";

        const sorted = arr.sort((a, b) => compare(a, b));
        if (sorted[0] === 0) {
            return "0";
        }
        return sorted.join("");
    }
}
