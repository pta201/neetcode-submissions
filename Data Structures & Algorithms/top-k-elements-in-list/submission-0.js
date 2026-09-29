class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        nums.forEach(num => {
            if(map.has(num)){
                let curCount = map.get(num);
                map.set(num, ++curCount);
            }
            else {
                map.set(num,1)
            }
        })
        const sortedMap = new Map([...map.entries()].sort((a,b)=> b[1] - a[1]))
        const result = []
        sortedMap.forEach((v,k)=> {
            result.push(k)
        })
        return result.slice(0,k)

    }
}
