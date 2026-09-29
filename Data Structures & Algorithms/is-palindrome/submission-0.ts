class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s: string): boolean {
        const chars = s.match(/[a-zA-Z0-9]/g)?.join("").toUpperCase().split("");
        if (!chars) return true;
        const mid = Math.floor(chars.length/2);
        let isPalindrome = true;
        for(let i = 0, j = chars.length - 1 ; i <= mid && j >= mid; i++, j--){
            console.log(chars[i], chars[j], i, j);
                if(chars[i] !== chars[j]){
                    isPalindrome = false;
                };
        }  
        return isPalindrome; 
    }
}
