class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        strs.forEach((str) => {
            const key = str.split("").sort().join("");
            if(map.has(key)){
               const oldVal =  map.get(key);
               const newVal = [...oldVal, str];
               map.set(key, newVal);
            }
            else{
                map.set(key, [str]);
            }
        })
        const result = []
         map.forEach(v => result.push(v))
         return result;
    }
}
