class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const output: number[] = [];

  const prefix = new Array(nums.length).fill(1);
  const postfix = new Array(nums.length).fill(1);

  // Prefix prep
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefix[i] = 1 * nums[i];
    } else {
      prefix[i] = prefix[i - 1] * nums[i];
    }
  }

  // Postfix prep
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      postfix[i] = 1 * nums[i];
    } else {
      postfix[i] = postfix[i + 1] * nums[i];
    }
  }

  // Output
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      output[i] = 1 * postfix[i + 1];
    } else if (i === nums.length - 1) {
      output[i] = 1 * prefix[i - 1];
    } else {
      output[i] = prefix[i - 1] * postfix[i + 1];
    }
  }
  return output;
    }
}
