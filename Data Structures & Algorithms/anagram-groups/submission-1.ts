class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
         const map = new Map<string, string[]>();

  const getKey = (str: string) => {
    return str
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
  };

  strs.forEach((str) => {
    const key = getKey(str);
    if (map.has(key)) {
      const curArr = map.get(key) ?? [];
      const newArr = [...curArr, str];
      map.set(key, newArr);
    } else {
      map.set(key, [str]);
    }
  });
  return Array.from(map.values())
    }
}
