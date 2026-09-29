class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const sletters = s.split("").sort();
        const tletters = t.split("").sort();
        for (const l in sletters) {
            if(sletters[l] !== tletters[l]) return false
        } 
 
        return true
    }
}
