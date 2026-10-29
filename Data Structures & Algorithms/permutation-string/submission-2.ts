class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(str1: string, str2: string): boolean {
        const countChar = (str: string) => {
            const count = new Map<string, number>();

            str.split("").forEach((s) => {
                count.set(s, (count.get(s) ?? 0) + 1);
            });

            return count;
        };
        const strFromMap = (map: Map<string, number>) => {
            return Array.from(map)
                .sort((a, b) => {
                    return b[0].localeCompare(a[0]);
                })
                .join("");
        };
        const str1Count = countChar(str1);
        const str1CountStr = strFromMap(str1Count);

        for (let i = 0; i < str2.length; i++) {
            let j = i + str1.length;

            const slide = str2.slice(i, j);
            const slideCount = countChar(slide);
            const slideCountStr = strFromMap(slideCount);

            if (str1CountStr === slideCountStr) return true;
        }

        return false;
    }
}
