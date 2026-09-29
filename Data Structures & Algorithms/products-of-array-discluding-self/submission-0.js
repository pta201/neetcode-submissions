class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        return nums.map((num,index, original) => {
            const remainNums = original.filter((_,i)=> i!== index);
            let remainProd = remainNums.reduce((acc, n) => {
               return acc *= n
            }, 1);
            if(Number.isNaN(remainProd))
                remainProd = 0;
            return remainProd
        })

    }
}
